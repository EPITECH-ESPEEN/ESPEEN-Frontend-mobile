/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

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
    service_id: number;
    name: string;
    status: boolean;
    icon: string;
    buttons: IServiceButton[];
    actions: IServiceAction[];
    reactions: IServiceReaction[];
};
