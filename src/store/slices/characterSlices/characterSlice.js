import { createSlice } from "@reduxjs/toolkit";
import getCharacters from "../../../services/api/Characters/getCharacters";

const initialState = {
    characters: [],
    info: {}
}

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, actions) => {
            state.characters = actions.payload
        },
        setInfoCharacters: (state, actions) => {
            state.info = actions.payload
        }
    }
})

export const { setCharacters, setInfoCharacters } = characterSlice.actions

export default characterSlice.reducer;

export const getAllCharacters = (number) => (dispatch) => {
    getCharacters(number)
    .then(res => dispatch(setCharacters(res)))
    .catch(err => console.error(err))
}

export const getAllPages = () => (dispatch) => {
    getCharacters()
    .then(res => dispatch(setInfoCharacters(res.info)))
    .catch(err => console.error(err))
}