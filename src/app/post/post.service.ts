import { Injectable } from '@angular/core';
import { Post } from '../Model/post';
import { Comment } from '../Model/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts: Post[] = [
    new Post(
      1,
      {
        id: 1,
        name: 'Ahmed Adel',
        description: 'Web Developer',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
        timeSinceAuthorPosted: '1 m'
      },
      `Proin fringilla dictum finibus. Vivamus eget diam ullamcorper mauris venenatis malesuada.
      Donec accumsan rutrum magna, sed varius enim ultrices eu.
      Aliquam finibus dolor eu lectus rhoncus feugiat. Aliquam hendrerit aliquet mauris.
      Donec felis mauris, porta vel pulvinar quis, bibendum eget urna.
      Donec maximus blandit ligula ac tristique. Praesent interdum dolor metus,
      sed tincidunt purus euismod ac. Aenean volutpat ac justo id tempor.
      Nunc sed nisl et velit dapibus mattis.
      `,
      0,
      [
        new Comment(
          {
            id: 1,
            name: 'Ahmed Adel',
            description: 'Web Developer',
            profileImageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
            timeSinceAuthorPosted: '1 m'
          },
          `Vivamus eget diam ullamcorper mauris venenatis malesuada.`,
          0,
          []
        )
      ],
      ''
    )
  ];


  editPost(post: Post, newPostText: string) {
    this.posts[this.posts.indexOf(post)].text = newPostText;
  }

  deletePost(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }

  editComment(post: Post, comment: Comment, newCommentText: string) {
    this.posts[this.posts.indexOf(post)].comments[this.posts[this.posts.indexOf(post)].comments.indexOf(comment)].text = newCommentText;
  }
  deleteComment(post: Post, comment: Comment) {
    this.posts[this.posts.indexOf(post)].comments.splice(this.posts[this.posts.indexOf(post)].comments.indexOf(comment), 1);
  }

  editReply(post: Post, comment: Comment, reply: Comment, newReplyText: string) {
    this.posts[this.posts.indexOf(post)].comments[this.posts[this.posts.indexOf(post)].comments.indexOf(comment)].replies[this.posts[this.posts.indexOf(post)].comments[this.posts[this.posts.indexOf(post)].comments.indexOf(comment)].replies.indexOf(reply)].text = newReplyText;
  }

  deleteReply(post: Post, comment: Comment, reply: Comment) {
    this.posts[this.posts.indexOf(post)].comments[this.posts[this.posts.indexOf(post)].comments.indexOf(comment)].replies.splice(this.posts[this.posts.indexOf(post)].comments[this.posts[this.posts.indexOf(post)].comments.indexOf(comment)].replies.indexOf(reply), 1);
  }

}
