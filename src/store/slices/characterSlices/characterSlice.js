import { createSlice } from "@reduxjs/toolkit";
import getCharacters from "../../../services/api/Characters/getCharacters";

const initialState = {
    characters: [],
    info: {},
    nextPage:null,
    prevPage:null,
    currentPage:1,
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
        },
        setNextPage:(state , actions) => {
            state.nextPage = actions.payload
        },
        setPrevPage: (state, actions) => {
            state.prevPage = actions.payload
        },
        setCurrentPage: (state, actions) => {
            state.currentPage = actions.payload
        }
    }
})

export const { setCharacters, setInfoCharacters, setCurrentPage, setNextPage , setPrevPage } = characterSlice.actions

export default characterSlice.reducer;

export const getAllCharacters = (number) => (dispatch) => {
    getCharacters(number)
    .then(res => {
        dispatch(setCharacters(res))
        dispatch(setInfoCharacters(res.info))
        dispatch(setNextPage(res.info.next))
        dispatch(setPrevPage(res.info.prev))
    })
    .catch(err => console.error(err))
}