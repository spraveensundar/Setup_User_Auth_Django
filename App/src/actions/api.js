import axios from "axios";

import { BASE_URL } from "../config";

var api = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    responseEncoding: 'utf8',
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;