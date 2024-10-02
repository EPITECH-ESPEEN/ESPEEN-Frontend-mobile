/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

export interface IServiceAction {
    name: string;
    path: string;
};

export interface IService {
    name: string;
    status: boolean;
    icon: string;
    actions: IServiceAction[];
};
