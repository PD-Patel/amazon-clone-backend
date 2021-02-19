import axios from "axios";

const instances = axios.create({
  baseURL: "http://localhost:8001",
});

export default instances;
