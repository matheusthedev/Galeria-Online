import axios from "axios";

const apiPorta = "7113"

const apilocal = `https://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: apilocal
});

export default api;