/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

export interface INodeDatas {
    service: string | null;
    option: string | null;
}

export interface INode {
    id: string;
    position: { x: number, y: number };
    data: any;
    type?: string;
};

export interface IEdge {
    id: string;
    type: string;
    source: string;
    target: string;
};

export interface INodeTypes {
    [key: string]: React.FC<any>;
};

export interface INodesIds {
    [key: string]: number;
}

export interface IGraphNode {
    source: INode;
    targets: INode[];
}
