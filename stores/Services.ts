/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { fetchGet } from "../services/fetch";
import { IService } from "../types/Services";

/* ----- DATAS ----- */
let lastFetchServices: number = 0;
const services: Map<number, { fetch: number; service: IService }> = new Map();
let lastFetchLinkedServices: number = 0;
let linkedServices: string[] = [];

/* ----- FETCH ----- */
export async function fetchLinkedServices() {
    try {
        const response = await fetchGet("user/services");
        const jsonResponse = await response.json();
        linkedServices = jsonResponse.services;
        lastFetchLinkedServices = Date.now();
    } catch (error) {
        console.error("Error fetching linked services: ", error);
    }
}

export async function fetchServices() {
    try {
        const response = await fetchGet("services");
        const jsonResponse = await response.json();
        services.clear();
        lastFetchServices = Date.now();
        for (let i = 0; i < jsonResponse.services.length; i++) {
            const tmp = { ...(jsonResponse.services[i] as IService) };
            services.set(tmp.uid, { fetch: Date.now(), service: tmp });
        }
        await fetchLinkedServices();
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
    if (services.size === 0 || Date.now() - lastFetchServices > 1000 * 60 * 60 * 24) await fetchServices();
    const tmp = new Map<number, IService>();
    services.forEach((value, key) => {
        const service = {...value.service}
        if (service.actions === undefined) service.actions = []
        if (service.reactions === undefined) service.reactions = []
        tmp.set(key, service);
    });
    return tmp;
}

export async function getService(uid: number) {
    const service = services.get(uid);
    if (service === undefined || Date.now() - service.fetch > 1000 * 60 * 60 * 24) await fetchService(uid);
    return services.get(uid)?.service;
}

export async function getLinkedServices() {
    if (linkedServices.length === 0 || Date.now() - lastFetchLinkedServices > 1000 * 60 * 60 * 24) await fetchLinkedServices();
    return linkedServices;
}


/* ----- FUNCTION ----- */
export async function clearServices() {
    services.clear();
    linkedServices = [];
}
