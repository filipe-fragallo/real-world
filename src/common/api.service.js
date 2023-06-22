import JwtService from "@/common/jwt.service";
import Client from "@/common/config";

const ApiService = {
  setHeader() {
    Client.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Client.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Client.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Client.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Client.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Client.put(`${resource}`, params);
  },

  delete(resource) {
    return Client.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const TagsService = {
  get() {
    return ApiService.get("tags");
  }
};

export const ArticlesService = {
  query(type, params) {
    return ApiService.query("articles" + (type === "feed" ? "/feed" : ""), {
      params: params
    });
  },
  get(slug) {
    return ApiService.get("articles", slug);
  },
  create(params) {
    return ApiService.post("articles", { article: params });
  },
  update(slug, params) {
    return ApiService.update("articles", slug, { article: params });
  },
  destroy(slug) {
    return ApiService.delete(`articles/${slug}`);
  }
};

export const CommentsService = {
  get(slug) {
    if (typeof slug !== "string") {
      throw new Error(
        "[RWV] CommentsService.get() article slug required to fetch comments"
      );
    }
    return ApiService.get("articles", `${slug}/comments`);
  },

  post(slug, payload) {
    return ApiService.post(`articles/${slug}/comments`, {
      comment: { body: payload }
    });
  },

  destroy(slug, commentId) {
    return ApiService.delete(`articles/${slug}/comments/${commentId}`);
  }
};

export const FavoriteService = {
  add(slug) {
    return ApiService.post(`articles/${slug}/favorite`);
  },
  remove(slug) {
    return ApiService.delete(`articles/${slug}/favorite`);
  }
};
