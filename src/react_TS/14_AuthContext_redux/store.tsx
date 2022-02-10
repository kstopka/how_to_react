import { configureStore } from "@reduxjs/toolkit";
import status from "./reducer";

export const store = configureStore({
    reducer: {
        status,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
