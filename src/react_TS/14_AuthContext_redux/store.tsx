import { configureStore } from "@reduxjs/toolkit";
import status from "./reducer/reducerStatus";
import data from "./reducer/reducerData";

export const store = configureStore({
    reducer: {
        status,
        data,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
