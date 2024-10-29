/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { ITeamMember } from "../types/Team";


/* ----- DATAS ----- */
export const teamMembers: ITeamMember[] = [
    { name: "Caroline Boilly", role: "caroline_boilly" },
    { name: "Clement Piasco", role: "clement_piasco" },
    { name: "Daniil Stepanov", role: "daniil_stepanov" },
    { name: "Léonard OURSEL", role: "leonard_oursel" },
    { name: "Nathan TIROLF", role: "nathan_tirolf" },
];

export const teamPictures: { [key: string]: any } = {
    caroline_boilly: require("../assets/img/teamMember/caroline_boilly.jpg"),
    clement_piasco: require("../assets/img/teamMember/clement_piasco.png"),
    daniil_stepanov: require("../assets/img/teamMember/daniil_stepanov.jpg"),
    leonard_oursel: require("../assets/img/teamMember/leonard_oursel.jpg"),
    nathan_tirolf: require("../assets/img/teamMember/nathan_tirolf.png"),
}
