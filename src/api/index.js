import axios from "axios";

const api = axios.create({ baseURL: "https://wirlley-metas-api.herokuapp.com/objetivo" });

export default api;
