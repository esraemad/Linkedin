import { Comment } from './comment';
import { Author } from './author';

export class Post {

  constructor(
    public id: number,
    public author: Author,

    public text: string,

    public numOfReactions?: number,
    public comments?: Comment[],
    public imgUrl?: string,
  ) { }
}
