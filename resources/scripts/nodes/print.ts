import {LGraphNode, LiteGraph, Vector2} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/print')
export class PrintNode extends LGraphNode {
  public title: string = 'Print a message';

  public pos: Vector2 = [1000, 150];
  public color = '#1a8031';
  public bgcolor = '#1a8031';

  constructor() {
    super();
    this.addInput("print", LiteGraph.ACTION as any);
    this.addInput("message", "string");
  }
}

