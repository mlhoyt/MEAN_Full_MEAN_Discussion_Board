import { Post } from './post';
import { Topic } from './topic';
import { Comment } from './comment';

export class User {
  _id: string = "";
  name: string = "";
  _xposts: Array<Post> = [];
  _topics: Array<Topic> = [];
  _comments: Array<Comment> = [];
  createdAt: Date;
}
