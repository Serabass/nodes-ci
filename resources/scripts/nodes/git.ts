import {LGraph, LGraphNode, LiteGraph, Vector2} from 'litegraph.js';
import {LiteGraphNode} from '../decorators/LiteGraphNode.ts';

@LiteGraphNode('CI/git')
export class GitNode extends LGraphNode {
    public title: string = 'Git';

    public color = '#1f3a54';
    public bgcolor = '#1f3a54';

    constructor() {
        super();
        this.addWidget('text', 'repo_url', 'https://github.com/Serabass/nodes-ci.git');

        this.addOutput("complete", LiteGraph.EVENT as any);

        this.pos = [250, 220];
        this.size = [350, 120];
    }
}

