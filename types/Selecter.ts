/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

export interface IInput {
    label: string;
    value: string;
    type: string;
}

export interface ISelecterItem {
    label: string;
    value: string;
};

export interface IServiceOptionItem {
    option: ISelecterItem;
    fields: IInput[];
}

export interface IServiceSelecterItem {
    service: ISelecterItem;
    options: IServiceOptionItem[];
}

export interface IServiceSelecter {
    actions: IServiceSelecterItem[];
    reactions: IServiceSelecterItem[];
}
