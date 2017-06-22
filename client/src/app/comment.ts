import { User } from './user';
import { Post } from './post';

export class Comment {
  _id: string = "";
  text: string = "";
  _user: User = new User();
  _post: Post = new Post();
  createdAt: Date;
}
