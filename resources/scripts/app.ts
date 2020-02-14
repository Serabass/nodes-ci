import '../scss/main.scss';
import 'bootstrap';
import {LGraph, LGraphCanvas, LiteGraph} from 'litegraph.js';
import $ from 'jquery';
import './nodes/index.ts';

$(function () {
    let graph = new LGraph();
    let canvas = new LGraphCanvas("#mycanvas", graph);
    let repoString = LiteGraph.createNode("basic/string");
    repoString.pos = [100,200];
    repoString.title = 'Git Repo URL';
    repoString.size = [300, 50];
    graph.add(repoString);

    let git = LiteGraph.createNode("CI/git");
    git.pos = [450,300];
    git.title = 'git';
    graph.add(git);

    repoString.connect(0, git, 0);

    let bash = LiteGraph.createNode("CI/bash");
    bash.pos = [700,200];

    graph.add(bash);
    git.connect(0, bash, 0 );

    let notify = LiteGraph.createNode("CI/notify-telegram");
    notify.pos = [900,400];
    graph.add(notify);

    bash.connect(1, notify, 1 );

    let print = LiteGraph.createNode("CI/print");
    print.pos = [1000,150];
    graph.add(print);

    bash.connect(0, print, 0 );



    graph.start();
});
