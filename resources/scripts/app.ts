import '../scss/main.scss';
import 'bootstrap';
import {LGraph, LGraphCanvas, LGraphNode, LiteGraph} from 'litegraph.js';
import $ from 'jquery';
import './nodes/index.ts';
import {BashNode, GitNode, NotifyTelegram, PrintNode} from './nodes/index.ts';
import {onReady} from './decorators/onReady.ts';

class App {

  public static graph: LGraph = new LGraph();
  public static canvas: LGraphCanvas;

  public static load() {
    let json_data = $("#json_data_div").html();
    let json = JSON.parse(json_data);

    this.graph.last_node_id = json.last_node_id;
    this.graph.last_link_id = json.last_link_id;

    let ids: {
      [id: number]: {
        node: LGraphNode,
        nodeInfo: any
      }
    } = {};

    for (let nodeInfo of json.nodes) {
      let node = LiteGraph.createNode(nodeInfo.type);
      node.id = nodeInfo.id;
      node.title = nodeInfo.title;
      node.pos = nodeInfo.pos;
      node.size = nodeInfo.size;
      node.properties = nodeInfo.properties;

      this.graph.add(node);

      ids[node.id] = {
        node,
        nodeInfo,
      };
    }

    Object.entries(ids).forEach(([id, {node, nodeInfo}]) => {
      ids;
      json;

      for (let input of nodeInfo.inputs) {
        if (input.link) {
          ids[input.link].node.connect(0, node, 0);
        }
      }

      /*        for (let output of nodeInfo.outputs) {
                  if (output.links) {
                      for (let link of output.links) {
                          node.connect(0, ids[link].node, link);
                          debugger;
                      }
                  }
              }*/
    });
  }

  public static defaults() {
    let git = LiteGraph.createNode<GitNode>("CI/git");
    this.graph.add(git);

    let bash = LiteGraph.createNode<BashNode>("CI/bash");
    this.graph.add(bash);

    git.connect(0, bash, 0);

    let notify = LiteGraph.createNode<NotifyTelegram>("CI/notify-telegram");
    this.graph.add(notify);

    bash.connect(1, notify, 0);

    let print = LiteGraph.createNode<PrintNode>("CI/print");
    this.graph.add(print);

    bash.connect(0, print, 0);
  }

  public static defaults2() {
    let git = LiteGraph.createNode<GitNode>("CI/git");
    git.pos = [450, 300];
    git.title = 'git';
    this.graph.add(git);

    let bash = LiteGraph.createNode<BashNode>("CI/bash");
    bash.pos = [700, 200];

    this.graph.add(bash);
    git.connect(0, bash, 0);

  }

  @onReady
  public static ready() {
    this.canvas = new LGraphCanvas("#mycanvas", this.graph);

    //  this.load(graph);
    this.defaults();
    // this.defaults2(graph);

    $('#jobForm').on('submit', () => {
      // graph.start();
      let serialized = this.graph.serialize();

      function convert(v: any): any {
        return [].slice.call(v);
      }

      for (let node of serialized.nodes) {
        node.pos = convert(node.pos);
        node.size = convert(node.size);
      }

      $('#json_data').val(JSON.stringify(serialized));
    });
  }
}
