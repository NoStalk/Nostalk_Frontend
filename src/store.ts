import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from './features/userDataSlice'

export const store = configureStore({
    reducer: {
        userData: userDataReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;