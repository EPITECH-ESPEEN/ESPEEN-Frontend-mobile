/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { fetchGet } from "../services/fetch";
import { IService } from "../types/Services";

/* ----- DATAS ----- */
let lastFetch: number = 0;
const services: Map<number, { fetch: number; service: IService }> = new Map();


/* ----- FETCH ----- */
export async function fetchServices() {
    try {
        const response = await fetchGet("services");
        const jsonResponse = await response.json();
        services.clear();
        lastFetch = Date.now();
        for (let i = 0; i < jsonResponse.services.length; i++) {
            const tmp = { ...(jsonResponse.services[i] as IService) };
            services.set(tmp.uid, { fetch: Date.now(), service: tmp });
        }
    } catch (error) {
        console.error("Error fetching services: ", error);
    }
}

export async function fetchService(uid: number) {
    try {
        const response = await fetchGet(`services/${uid}`);
        const jsonResponse = await response.json();
        const tmp = { ...(jsonResponse as IService) };
        services.set(tmp.uid, { fetch: Date.now(), service: tmp });
    } catch (error) {
        console.error("Error fetching service: ", error);
    }
}

/* ----- GETTERS ----- */
export async function getServices() {
    if (services.size === 0 || Date.now() - lastFetch > 1000 * 60 * 60 * 24) await fetchServices();
    const tmp = new Map<number, IService>();
    services.forEach((value, key) => {
        tmp.set(key, value.service);
    });
    return tmp;
}

export async function getService(uid: number) {
    const service = services.get(uid);
    if (service === undefined || Date.now() - service.fetch > 1000 * 60 * 60 * 24) await fetchService(uid);
    return services.get(uid)?.service;
}
