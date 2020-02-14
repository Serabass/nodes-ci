import {LiteGraph} from 'litegraph.js';

export function LiteGraphNode(type: string) {
    return (target: any) => {
        LiteGraph.registerNodeType(type, target);
    };
}
