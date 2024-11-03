/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { getToken } from "./token";


/* ----- DATAS ----- */
// const API_URL = "http://localhost:8080/api";
const API_URL = "https://certain-catfish-splendid.ngrok-free.app/backend/api";


/* ----- PRIVATE FUNCTIONS ----- */
const getHeaders = async () => {
    const authToken = await getToken();
    return {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + authToken || "",
        'Ngrok-Skip-Browser-Warning': "true",
    };
};


/* ----- PUBLIC FUNCTIONS ----- */
export async function fetchGet(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    const headers = await getHeaders();
    return fetch(completeUrl, {
        method: "GET",
        headers: headers,
    });
}

export async function fetchPut(url: string, body: unknown) {
    const completeUrl = `${API_URL}/${url}`;
    const headers = await getHeaders();
    return fetch(completeUrl, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
    });
}

export async function fetchPost(url: string, body: unknown) {
    const completeUrl = `${API_URL}/${url}`;
    const headers = await getHeaders();
    return fetch(completeUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
    });
}

export async function fetchDelete(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    const headers = await getHeaders();
    return fetch(completeUrl, {
        method: "DELETE",
        headers: headers,
    });
}

export function getBaseUrl() {
    return API_URL;
}