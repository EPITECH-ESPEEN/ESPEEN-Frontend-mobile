/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

export interface IServiceField {
    name: string;
    type: string;
};

export interface IServiceButton {
    name: string;
    path: string;
};

export interface IServiceAction {
    action_id: number;
    name: string;
    fields: IServiceField[];
}

export interface IServiceReaction {
    reaction_id: number;
    name: string;
    fields: IServiceField[];
}

export interface IService {
    uid: number;
    name: string;
    icon: string;
    buttons: IServiceButton[];
    actions: IServiceAction[];
    reactions: IServiceReaction[];
};
