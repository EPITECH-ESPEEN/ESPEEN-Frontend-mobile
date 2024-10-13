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
import { userApi } from "./userApi";
import { logout } from "../features/userSlice";
import { API_BASE_URL } from '@env'


/* ----- TYPES ----- */
interface LoginRequestBody {
    username: string;
    password: string;
}

interface RegisterRequestBody {
    username: string;
    email: string;
    password: string;
}


/* ----- FUNCTIONS ----- */
export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/api` }),
    endpoints: (builder) => ({
        login: builder.mutation<void, LoginRequestBody>({
            query(body) {
                return {
                    url: "/login",
                    method: "POST",
                    body,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getProfile.initiate());
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        logout: builder.query<void, void>({
            query: () => "/logout",
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    dispatch(logout());
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        register: builder.mutation<void, RegisterRequestBody>({
            query(body) {
                return {
                    url: "/register",
                    method: "POST",
                    body,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getProfile.initiate());
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useLoginMutation, useLazyLogoutQuery, useRegisterMutation } = authApi;
