import {LGraphNode, LiteGraph} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/notify-telegram')
export class NotifyTelegram extends LGraphNode {
    public title: string = 'Notify Telegram';

    public color = '#34ace1';
    public bgcolor = '#34ace1';

    constructor() {
        super();
        this.addInput("key","string");
        this.addInput("message","string");
    }
}

