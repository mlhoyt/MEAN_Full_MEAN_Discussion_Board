import { Topic } from './topic';

export class Category {
  _id: string = "";
  name: string = "";
  _topics: Array<Topic> = [];
  createdAt: Date;
}
