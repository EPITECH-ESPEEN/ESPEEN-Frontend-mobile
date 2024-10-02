/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { getToken } from "./authService";


/* ----- FUNCTIONS ----- */
export function fetchGet(url: string) {
    const token = getToken() || "";
    return fetch(url, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
}

export function fetchPut(url: string, body: unknown) {
    const token = getToken() || "";
    return fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
    });
}

export function fetchDelete(url: string) {
    const token = getToken() || "";
    return fetch(url, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
        },
    });
}
