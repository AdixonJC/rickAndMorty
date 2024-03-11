import { AxiosRAM } from "../axiosInstance"


const getCharacters = (pageNumber = "") => {
    return new Promise((resolve, reject) => {
        AxiosRAM.get(`character/?page=${pageNumber}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}


export default getCharacters