/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import { setInitialEdges, setInitialNodes, setNodesIds } from "../stores/Nodes";
import { IEdge, IGraphNode, INode, INodeDatas, INodesIds } from "../types/Node";

export function getNodeGraph(nodes: INode[], edges: IEdge[]): IGraphNode[] | boolean
{
    const graph: IGraphNode[] = [];
    const linkedTargets: string[] = [];

    nodes.forEach(node => {
        if (node.type !== "action")
            return;

        const targets: INode[] = [];

        edges.forEach(edge => {
            if (edge.source === node.id) {
                const tmp = nodes.find(n => n.id === edge.target);
                if (tmp) {
                    targets.push(tmp);
                    linkedTargets.push(tmp.id);
                }
            }
        });

        graph.push({
            source: node,
            targets: targets
        });
    });

    for (let i = 0; i < graph.length; i++) {
        if (graph[i].targets.length === 0)
            return false;
    }
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].type === "reaction" && !linkedTargets.includes(nodes[i].id))
            return false;
    }

    return graph;
}

export function graphToTable(graph: IGraphNode[]): string[][] | boolean
{
    const table: string[][] = [];

    for (let i = 0; i < graph.length; i++) {
        const line = [];
        const node = graph[i];
        const sourceData: INodeDatas = node.source.data as INodeDatas;
        if (typeof sourceData.service !== "string" || typeof sourceData.option !== "string")
            return false;
        line.push(sourceData.option);
        node.targets.forEach(target => {
            const targetData: INodeDatas = target.data as INodeDatas;
            if (typeof targetData.service !== "string" || typeof targetData.option !== "string")
                return false;
            line.push(targetData.option);
        });
        if (line.length === 0)
            return false;
        table.push(line);
    }

    return table;
}

function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function tableToGraph(table: string[][]): {graph: IGraphNode[], actionCounter: number, reactionCounter: number} | boolean
{
    const graph: IGraphNode[] = [];
    let actionCounter = 1;
    let reactionCounter = 1;

    for (let i = 0; i < table.length; i++) {
        const line = table[i];
        if (line.length === 0)
            return false;
        const source: INode = {
            id: `action-${actionCounter}`,
            position: { x: 1000 * i, y: 0 },
            data: {
                service: capitalize(line[0].split(".")[0]),
                option: line[0]
            },
            type: "action"
        };
        actionCounter++;
        const targets: INode[] = [];
        for (let j = 1; j < line.length; j++) {
            const target: INode = {
                id: `reaction-${reactionCounter}`,
                position: { x: 1000 * i + 500, y: 250 * (j - 1) },
                data: {
                    service: capitalize(line[j].split(".")[0]),
                    option: line[j]
                },
                type: "reaction"
            };
            reactionCounter++;
            targets.push(target);
        }
        graph.push({
            source: source,
            targets: targets
        });
    }

    return {graph, actionCounter, reactionCounter};
}

export function setDefaultNodes(datas: {graph: IGraphNode[], actionCounter: number, reactionCounter: number}) {
    const ids: INodesIds = {
        action: datas.actionCounter,
        reaction: datas.reactionCounter
    };
    setNodesIds(ids);

    const nodes: INode[] = [];
    const edges: IEdge[] = [];

    datas.graph.forEach(node => {
        nodes.push(node.source);
        node.targets.forEach(target => {
            nodes.push(target);
            const edge: IEdge = {
                id: `${node.source.id}-${target.id}`,
                type: "simplebezier",
                source: node.source.id,
                target: target.id
            };
            edges.push(edge);
        });
    });

    setInitialNodes(nodes);
    setInitialEdges(edges);
}