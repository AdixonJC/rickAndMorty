import { AxiosRAM } from "../axiosInstance"


const getAOnlyEpisode = (number = "") => {
    return new Promise((resolve, reject) => {
        AxiosRAM(`episodes/${number}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

export default getAOnlyEpisode