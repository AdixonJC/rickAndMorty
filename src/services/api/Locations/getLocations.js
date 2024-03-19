import { AxiosRAM } from "../axiosInstance"


const getLocations = (number = "") => {
    return new Promise((resolve, reject) => {
        AxiosRAM(`location/${number}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

export default getLocations