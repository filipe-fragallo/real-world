import ArticleRepository from "./ArticleRepository";
import UserRepository from "./UserRepository";

const repositories = {
  posts: ArticleRepository,
  users: UserRepository
};

export default {
  get: name => repositories[name]
};
