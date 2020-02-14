import '../scss/main.scss';
import 'bootstrap';
import {LGraph, LGraphCanvas, LiteGraph} from 'litegraph.js';
import $ from 'jquery';
import './nodes/index.ts';

function load(graph: LGraph) {
    let json_data = $("#json_data_div").html();
    let json = JSON.parse(json_data);

    graph.last_node_id = json.last_node_id;
    graph.last_link_id = json.last_link_id;

    let ids: { [id: number]: any } = {};

    for (let nodeInfo of json.nodes) {
        let node = LiteGraph.createNode(nodeInfo.type);
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

        for (let output of nodeInfo.outputs) {
        }

    });
}

function defaults(graph: LGraph) {
    let repoString = LiteGraph.createNode("basic/string");

    repoString.pos = [100, 200];
    repoString.title = 'Git Repo URL';
    repoString.size = [300, 50];
    graph.add(repoString);

    let git = LiteGraph.createNode("CI/git");
    git.pos = [450, 300];
    git.title = 'git';
    graph.add(git);

    repoString.connect(0, git, 0);

    let bash = LiteGraph.createNode("CI/bash");
    bash.pos = [700, 200];

    graph.add(bash);
    git.connect(0, bash, 0);

    let notify = LiteGraph.createNode("CI/notify-telegram");
    notify.pos = [900, 400];
    graph.add(notify);

    bash.connect(1, notify, 0);

    let print = LiteGraph.createNode("CI/print");
    print.pos = [1000, 150];
    graph.add(print);

    bash.connect(0, print, 0);
}

$(function () {
    let graph = new LGraph();
    let canvas = new LGraphCanvas("#mycanvas", graph);

    // load(graph);
    defaults(graph);

    $('#jobForm').on('submit', function () {
        // graph.start();
        var serialized = graph.serialize();
        $('#json_data').val(JSON.stringify(serialized));
        debugger;
    });

});
