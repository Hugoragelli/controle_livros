import axios from "axios";

export const inAxios = axios.create({baseURL: 'http://localhost:3001/'});
export const onAxios = axios.create({baseURL: 'https://caminhodocredito.atenderbem.com/'});