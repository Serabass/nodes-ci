import {LGraphNode, LiteGraph, Vector2} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/bash')
export class BashNode extends LGraphNode {
  public title: string = 'Bash';

  public pos: Vector2 = [700, 200];
  public color = '#000';
  public bgcolor = '#000';

  constructor() {
    super();
    this.addInput("run", LiteGraph.ACTION as any);
    this.addWidget("text", "script", "");
    this.addOutput("complete", LiteGraph.EVENT as any);
    this.addOutput("error", LiteGraph.EVENT as any);
  }
}

