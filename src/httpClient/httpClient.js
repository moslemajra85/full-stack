import axios from "axios";

const HttpClient = axios.create({
  baseURL: "http://localhost:3001",
});

export default HttpClient;
