import '../scss/main.scss';
import 'bootstrap';
import {LGraph, LGraphCanvas, LGraphNode, LiteGraph} from 'litegraph.js';
import $ from 'jquery';
import './nodes/index.ts';
import {GitNode, BashNode, NotifyTelegram, PrintNode} from './nodes/index.ts';

function load(graph: LGraph) {
  let json_data = $("#json_data_div").html();
  let json = JSON.parse(json_data);

  graph.last_node_id = json.last_node_id;
  graph.last_link_id = json.last_link_id;

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


    graph.add(node);

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

function defaults(graph: LGraph) {
  let git = LiteGraph.createNode<GitNode>("CI/git");
  graph.add(git);

  let bash = LiteGraph.createNode<BashNode>("CI/bash");
  graph.add(bash);

  git.connect(0, bash, 0);

  let notify = LiteGraph.createNode<NotifyTelegram>("CI/notify-telegram");
  graph.add(notify);

  bash.connect(1, notify, 0);

  let print = LiteGraph.createNode<PrintNode>("CI/print");
  graph.add(print);

  bash.connect(0, print, 0);
}

function defaults2(graph: LGraph) {
  let git = LiteGraph.createNode<GitNode>("CI/git");
  git.pos = [450, 300];
  git.title = 'git';
  graph.add(git);

  let bash = LiteGraph.createNode<BashNode>("CI/bash");
  bash.pos = [700, 200];

  graph.add(bash);
  git.connect(0, bash, 0);

}

$(function () {
  let graph = new LGraph();
  let canvas = new LGraphCanvas("#mycanvas", graph);

  //  load(graph);
  defaults(graph);
  // defaults2(graph);

  $('#jobForm').on('submit', function () {
    // graph.start();
    var serialized = graph.serialize();

    function convert(v: any): any {
      return [].slice.call(v);
    }

    for (let node of serialized.nodes) {
      node.pos = convert(node.pos);
      node.size = convert(node.size);
    }

    $('#json_data').val(JSON.stringify(serialized));
  });
});
