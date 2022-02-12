import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataUsersCredentials, UserCredentials } from "../App.d";

const initialState: DataUsersCredentials = {
    imBusy: false,
    usersCredentials: [],
    error: false,
    errorMessage: "",
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.imBusy = true;
            state.error = true;
            state.errorMessage = action.payload;
        },
        setUsersCredentials: (state, action: PayloadAction<UserCredentials[]>) => {
            state.imBusy = true;
            state.usersCredentials = action.payload;
        },
    },
});
export const { setError, setUsersCredentials } = dataSlice.actions;
export default dataSlice.reducer;
