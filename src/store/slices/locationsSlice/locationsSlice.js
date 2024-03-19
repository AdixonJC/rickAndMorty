import { createSlice } from "@reduxjs/toolkit";
import getLocations from "../../../services/api/Locations/getLocations";

const initialState = {
    locations: {},
}

export const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setLocations: (state, actions) => {
            state.locations = actions.payload
        }
    }
})

export const {setLocations} = locationsSlice.actions

export default locationsSlice.reducer


export const getAllLocations = (number) => (dispatch) => {
    getLocations(number)
    .then(res => dispatch(setLocations(res)))
    .catch(err => console.error(err))
}