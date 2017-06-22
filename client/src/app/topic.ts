import { User } from './user';
import { Category } from './category';
import { Post } from './post';

export class Topic {
  _id: string = "";
  title: string = "";
  text: string = "";
  _user: User = new User();
  _category: Category = new Category();
  _xposts: Array<Post> = [];
  createdAt: Date;
}
