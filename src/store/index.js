import { configureStore } from "@reduxjs/toolkit";
import characterSlice  from "./slices/characterSlices/characterSlice";
import locationsSlice from "./slices/locationsSlice/locationsSlice";

export const store = configureStore({
    reducer: {
        characters: characterSlice,
        locations: locationsSlice
    }
})