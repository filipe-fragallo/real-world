import axios from "axios";

const baseDomain = "https://conduit.productionready.io/api";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

const Client = axios.create({
  baseURL
});

export default Client;
