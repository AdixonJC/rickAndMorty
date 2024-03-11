import axios from "axios";


const characterConfig = {
    baseURL: "https://rickandmortyapi.com/api/",
    // timeout: 1000,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
}

export const AxiosRAM = axios.create(characterConfig)