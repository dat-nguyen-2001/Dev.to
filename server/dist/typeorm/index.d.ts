import { User } from "./user.entity";
import { Article } from "./article.entity";
import { Comment } from "./comment.entity";
import { Like } from "./like.entity";
declare const entities: (typeof Comment | typeof Article | typeof User | typeof Like)[];
export { User, Article, Comment, Like };
export default entities;
