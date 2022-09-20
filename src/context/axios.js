import { Axios } from "axios"
import { useMemo } from "react"

export const useAxios = () => {
    const axios = useMemo(() => {
        new Axios({
            baseURL: 'https://api.daedongje.com'
        })
    }, []);

    return axios;
}