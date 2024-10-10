/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { getServices } from '../stores/Services';
import { IService, IServiceSelecterItem } from '../types/Services';


/* ----- FUNCTIONS ----- */
async function getAreaServices(): Promise<IServiceSelecterItem[]> {
    const tmp = await getServices();
    const services: IServiceSelecterItem[] = [];
    tmp.forEach((service) => {
        if (!service.status) return;
        services.push({
            item: {
                label: service.name,
                value: service.service_id.toString(),
            },
            actions: service.actions.map((action) => {
                return {
                    label: action.name,
                    value: action.action_id.toString(),
                };
            }),
            reactions: service.reactions.map((reaction) => {
                return {
                    label: reaction.name,
                    value: reaction.reaction_id.toString(),
                };
            }),
        });
    });
    return services;
}

export async function getAreaServicesActions(): Promise<IServiceSelecterItem[]> {
    return getAreaServices().then((services) => {
        return services.filter((service) => service.actions.length > 0);
    });
}

export async function getAreaServicesReactions(): Promise<IServiceSelecterItem[]> {
    return getAreaServices().then((services) => {
        return services.filter((service) => service.reactions.length > 0);
    });
}
