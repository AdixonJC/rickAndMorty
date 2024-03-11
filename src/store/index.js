import { configureStore } from "@reduxjs/toolkit";
import characterSlice  from "./slices/characterSlices/characterSlice";

export const store = configureStore({
    reducer: {
        characters: characterSlice
    }
})