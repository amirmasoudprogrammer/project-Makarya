import axios from "axios";

const Api = axios.create({  baseURL: "https://fakestoreapi.in/api"}  );
Api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);
export default Api