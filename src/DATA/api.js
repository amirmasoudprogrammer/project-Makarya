import axios from "axios";

const Api = axios.create({  baseURL: "https://api.escuelajs.co/api/v1/"}  );
Api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);
export default Api