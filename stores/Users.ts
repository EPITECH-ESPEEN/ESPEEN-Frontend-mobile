/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { fetchGet } from "../services/fetch";
import { IUser } from "../types/User";


/* ----- DATAS ----- */
let lastUsersFetch: number = 0;
const users: Map<number, { fetch: number; user: IUser }> = new Map();


/* ----- FETCH ----- */
export async function fetchUsers() {
    try {
        const response = await fetchGet("users");
        if (!response.ok) {
            users.clear();
            lastUsersFetch = Date.now();
            return;
        }
        const jsonResponse = await response.json();
        users.clear();
        lastUsersFetch = Date.now();
        for (let i = 0; i < jsonResponse.users.length; i++) {
            const tmp = { ...(jsonResponse.users[i] as IUser) };
            users.set(tmp.uid, { fetch: Date.now(), user: tmp });
        }
    } catch (error) {
        console.error("Error fetching users: ", error);
    }
}

export async function fetchUser(uid: number) {
    try {
        const response = await fetchGet(`users/${uid}`);
        const jsonResponse = await response.json();
        const tmp = { ...(jsonResponse as IUser) };
        users.set(tmp.uid, { fetch: Date.now(), user: tmp });
    } catch (error) {
        console.error("Error fetching user: ", error);
    }
}

/* ----- GETTERS ----- */
export async function getUsers() {
    if (users.size === 0 || Date.now() - lastUsersFetch > 1000 * 60 * 60 * 24) await fetchUsers();
    const tmp: IUser[] = [];
    users.forEach((value) => {
        tmp.push(value.user);
    });
    return tmp;
}

export async function getUserByUid(uid: number) {
    const user = users.get(uid);
    if (user === undefined || Date.now() - user.fetch > 1000 * 60 * 60 * 24) await fetchUser(uid);
    return users.get(uid)?.user;
}


/* ----- FUNCTION ----- */
export function clearUsers() {
    users.clear();
}
