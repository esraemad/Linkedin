import { Author } from './author';

export class Comment {
  constructor(
    public author: Author,
    public text: string,
    public numOfReactions?: number,
    public replies?: Comment[],
    public inEditMode: boolean= false,
  ) { }
}
