/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { getToken } from "./token";


/* ----- DATAS ----- */
const API_URL = "http://192.168.1.28:8080/api";


/* ----- FUNCTIONS ----- */
export async function fetchGet(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    const authToken = await getToken();
    return fetch(completeUrl, {
        headers: {
            Authorization: "Bearer " + authToken || "",
        },
    });
}

export async function fetchPut(url: string, body: unknown) {
    const completeUrl = `${API_URL}/${url}`;
    const authToken = await getToken();
    return fetch(completeUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + authToken || "",
        },
        body: JSON.stringify(body),
    });
}

export async function fetchPost(url: string, body: unknown) {
    const completeUrl = `${API_URL}/${url}`;
    const authToken = await getToken();
    return fetch(completeUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + authToken || "",
        },
        body: JSON.stringify(body),
    });
}

export async function fetchDelete(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    const authToken = await getToken();
    return fetch(completeUrl, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + authToken || "",
        },
    });
}

export function getBaseUrl() {
    return API_URL;
}