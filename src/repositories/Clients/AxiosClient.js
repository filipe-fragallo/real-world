import axios from "axios";

const baseDomain = "https://conduit.productionready.io/api";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

const Client = axios.create({
  baseURL
});

export const setToken = jwt => {
  Client.defaults.headers.common["Authorization"] = `Token ${jwt}`;
};

export const clearToken = () => {
  delete Client.defaults.headers.common["Authorization"];
};

export default Client;
