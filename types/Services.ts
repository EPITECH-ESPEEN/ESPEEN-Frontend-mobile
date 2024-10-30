/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import { ISelecterItem } from "./Selecter";

export interface IServiceButton {
    name: string;
    path: string;
};

export interface IServiceAction {
    action_id: number;
    name: string;
}

export interface IServiceReaction {
    reaction_id: number;
    name: string;
}

export interface IService {
    uid: number;
    name: string;
    status: boolean;
    icon: string;
    buttons: IServiceButton[];
    actions: IServiceAction[];
    reactions: IServiceReaction[];
};

export interface IServiceSelecterItem {
    item: ISelecterItem;
    actions: ISelecterItem[];
    reactions: ISelecterItem[];
}
