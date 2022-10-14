import { URL_API } from "@/configs";
import axios from "axios";

export default class AuthServices {

    static async auth (params)
    {
        return axios.post(`${URL_API}/auth`, params)
    }
}