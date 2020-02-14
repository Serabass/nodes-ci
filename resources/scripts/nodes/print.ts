import {LGraphNode, LiteGraph} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/print')
export class PrintNode extends LGraphNode {
    public title: string = 'Print a message';

    public color = '#1f3a54';
    public bgcolor = '#1f3a54';

    constructor() {
        super();
        this.addInput("message","string");
    }
}

