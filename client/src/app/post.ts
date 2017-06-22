import { User } from './user';
import { Topic } from './topic';
import { Comment } from './comment';

export class Post {
  _id: string = "";
  text: string = "";
  _user: User = new User();
  _topic: Topic = new Topic();
  _comments: Array<Comment> = [];
  createdAt: Date;
}
