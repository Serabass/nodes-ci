import {LGraphNode} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/git')
export class GitNode extends LGraphNode {
    public title: string = 'Git';

    public color = '#1f3a54';
    public bgcolor = '#1f3a54';

    constructor() {
        super();
        this.addInput("repo_url", "string");

        this.addOutput("complete","string");
    }
}

