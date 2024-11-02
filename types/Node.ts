/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

export interface INodeDatas {
    service: string | null;
    option: string | null;
    fields: string[];
}

export interface INode {
    data: INodeDatas;
    type: string;
};


export interface IGraphNode {
    id: number;
    source: INode;
    targets: INode[];
}
