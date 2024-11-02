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
        let source = sourceData.option;
        if (sourceData.fields && sourceData.fields.length > 0) {
            sourceData.fields.forEach(field => {
                source += `|${field}`;
            });
        }
        line.push(source);
        node.targets.forEach(tmp => {
            const targetData: INodeDatas = tmp.data as INodeDatas;
            if (typeof targetData.service !== "string" || typeof targetData.option !== "string")
                return false;
            let target = targetData.option;
            if (targetData.fields && targetData.fields.length > 0) {
                targetData.fields.forEach(field => {
                    target += `|${field}`;
                });
            }
            line.push(target);
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
    let actionCounter = 1;
    let reactionCounter = 1;

    for (let i = 0; i < table.length; i++) {
        const line = table[i];
        if (line.length === 0)
            return false;
        const dataService = capitalize(line[0].split(".")[0]);
        const dataOption = line[0].split("|")[0];
        const dataFields = line[0].split("|").slice(1);
        const data = {
            service: dataService,
            option: dataOption,
            fields: dataFields
        }
        const type = "action";

        const source: INode = { data, type};
        actionCounter++;
        const targets: INode[] = [];
        for (let j = 1; j < line.length; j++) {
            const dataService = capitalize(line[j].split(".")[0]);
            const dataOption = line[j].split("|")[0];
            const dataFields = line[j].split("|").slice(1);
            const data = {
                service: dataService,
                option: dataOption,
                fields: dataFields
            }
            const type = "reaction";

            const target: INode = { data, type};
            reactionCounter++;
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
