/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import { IGraphNode, INode, INodeDatas } from "../types/Node";

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

export function tableToGraph(table: string[][]): IGraphNode[] | boolean
{
    const graph: IGraphNode[] = [];

    for (let i = 0; i < table.length; i++) {
        const line = table[i];
        if (line.length === 0)
            return false;
        const source: INode = {
            data: {
                service: capitalize(line[0].split(".")[0]),
                option: line[0]
            },
            type: "action"
        };
        const targets: INode[] = [];
        for (let j = 1; j < line.length; j++) {
            const target: INode = {
                data: {
                    service: capitalize(line[j].split(".")[0]),
                    option: line[j]
                },
                type: "reaction"
            };
            targets.push(target);
        }
        graph.push({
            id: i,
            source: source,
            targets: targets
        });
    }

    return graph;
}
