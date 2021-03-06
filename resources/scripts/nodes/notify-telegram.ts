import {LGraphNode, LiteGraph} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/notify-telegram')
export class NotifyTelegram extends LGraphNode {
  public title: string = 'Notify Telegram';

  public color = '#0c3f75';
  public bgcolor = '#0c3f75';

  constructor() {
    super();
    this.addInput("notify", LiteGraph.ACTION as any);

    this.addInput("key", "string");
    this.addInput("message", "string");
    this.pos = [950, 400];
  }
}

