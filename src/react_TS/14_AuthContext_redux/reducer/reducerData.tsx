import { createSlice } from "@reduxjs/toolkit";
// import {  } from "../App.d";

const initialState: any = {
    imBusy: false,
    dataUsers: [],
    error: false,
    errorMessage: "",
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
});

export default dataSlice.reducer;
