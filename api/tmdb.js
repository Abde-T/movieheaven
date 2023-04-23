import axios from "axios";
import { headers } from "next/dist/client/components/headers";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Accept: "application/json"
    },
    params: {
        api_key:'5ab490b5f6681ee3678d3ad287d1d366'
    }
})
