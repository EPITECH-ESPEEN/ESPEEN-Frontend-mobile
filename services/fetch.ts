/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { getToken } from "./token";


/* ----- DATAS ----- */
const API_URL = "http://10.73.190.221:8080/api";


/* ----- FUNCTIONS ----- */
export async function fetchGet(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    const authToken = await getToken();
    return fetch(completeUrl, {
        headers: {
            Authorization: "Bearer " + authToken || "",
            credentials: 'include',
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
            credentials: 'include',
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
            credentials: 'include',
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
            credentials: 'include',
        },
    });
}

export function getBaseUrl() {
    return API_URL;
}