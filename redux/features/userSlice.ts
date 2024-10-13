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
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


/* ----- TYPES ----- */
interface User {
    id: string;
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
}


/* ----- DATAS ----- */
const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};


/* ----- FUNCTIONS ----- */
export const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        setIsAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        },
        logout: (state) => {
            return initialState;
        },
    },
});

export default userSlice.reducer;

export const { setUser, setIsAuthenticated, logout } = userSlice.actions;
