import {LGraphNode} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/print')
export class PrintNode extends LGraphNode {
    public title: string = 'Print a message';

    public color = '#1a8031';
    public bgcolor = '#1a8031';

    constructor() {
        super();
        this.addInput("message","string");
    }
}

