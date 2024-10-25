/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { fetchGet } from "../services/fetch";
import { tableToGraph } from "../services/nodes";
import { IUser } from "../types/User";
import { setInitialNodes } from "./Nodes";


/* ----- DATAS ----- */
let lastFetch: number = 0;
let user: IUser | null = null;


/* ----- FETCH ----- */
export async function fetchUser() {
    try {
        const response = await fetchGet("user");
        if (!response.ok)
            throw new Error("Error fetching user");
        const jsonResponse = await response.json();
        user = { ...(jsonResponse.user as IUser) };
        lastFetch = Date.now();
        const graph = tableToGraph(user.actionReaction);
        if (typeof graph === "boolean")
            throw new Error("Error while converting table to nodes");
        setInitialNodes(graph);
    } catch (error) {
        console.error("Error fetching services: ", error);
    }
}


/* ----- GETTERS ----- */
export async function getUser() {
    if (Date.now() - lastFetch > 1000 * 60 * 60 * 24 || !user)
        await fetchUser();
    return user;
}


/* ----- SETTER ----- */
export function setUser(newUser: IUser | null) {
    user = newUser;
}
