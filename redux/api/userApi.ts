/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser } from "../features/userSlice";
import { API_BASE_URL } from '@env'

/* ----- TYPES ----- */
interface User {
    id: string;
    username: string;
    name: string;
    email: string;
}

interface ProfileResponse {
    user: User;
}


/* ----- FUNCTIONS ----- */
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/api` }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => ({
                url: "/users",
            }),
        }),
        getProfile: builder.query<User, void>({
            query: () => `/profile`,
            transformResponse: (result: ProfileResponse) => result.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data));
                    dispatch(setIsAuthenticated(true));
                } catch (error) {
                    console.log(error);
                }
            },
            providesTags: [{ type: "User" }],
        }),
    }),
});

export const { useGetUsersQuery, useGetProfileQuery } = userApi;
