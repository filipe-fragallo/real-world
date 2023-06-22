import Client from "./Clients/AxiosClient";

export default {
  get() {
    return Client.get(`/user`);
  },
  login(payload) {
    return Client.post(`/users/login`, payload);
  },
  create(payload) {
    return Client.post(`/users/`, payload);
  }
};
