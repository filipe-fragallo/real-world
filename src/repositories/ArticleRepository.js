import Client from "./Clients/AxiosClient";

export default {
  getGlobal(payload) {
    let route = "/articles";
    if (payload) {
      const {
        tag = null,
        author = null,
        favourited = null,
        page = 1
      } = payload;
      route += tag ? `?tag=${tag}&` : "";
      route += author ? `?author=${author}&` : "";
      route += favourited ? `?favourited=${favourited}&` : "";
      route += page ? `?offset=${(page - 1) * 10}&limit=10` : "";
    }

    return Client.get(`${route}`);
  },
  getUser(payload) {
    let route = "/articles/feed";
    if (payload) {
      const { page = 1 } = payload;
      route += page ? `?offset=${(page - 1) * 10}&limit=10` : "";
    }

    return Client.post(`${route}`);
  },
  create(payload) {
    return Client.post(`/articles/`, payload);
  }
};
