import {LGraphNode, LiteGraph} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/bash')
export class BashNode extends LGraphNode {
    public title: string = 'Bash';

    public color = '#000';
    public bgcolor = '#000';

    constructor() {
        super();
        this.addInput("run","string");
        this.addInput("command","string");
        this.addOutput("complete","string");
        this.addOutput("error","string");
    }
}

