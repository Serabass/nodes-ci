import {LGraphNode, LiteGraph, Vector2} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/notify-telegram')
export class NotifyTelegram extends LGraphNode {
  public title: string = 'Notify Telegram';

  public pos: Vector2 = [900, 400];
  public color = '#0c3f75';
  public bgcolor = '#0c3f75';

  constructor() {
    super();
    this.addInput("notify", LiteGraph.ACTION as any);

    this.addInput("key", "string");
    this.addInput("message", "string");
  }
}

