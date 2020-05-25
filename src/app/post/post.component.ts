import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { PostEditComponent } from '../post/post-edit/post-edit.component';

import { PostEditComponent } from './post-edit/post-edit.component';
import { PostService } from './post.service';

import { Comment } from '../Model/comment';
import { Post } from '../Model/post';

import * as moment from 'moment';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @ViewChild('addCommentForm') addCommentForm: NgForm;
  @ViewChild('addReplyForm') addReplyForm: NgForm;
  @ViewChild('postComment') postComment: ElementRef;
  @ViewChild('commentReply') commentReply: ElementRef;

  constructor(public postService: PostService, public dialog: MatDialog) { }

  openDialog(post: Post): void {


    const dialogRef = this.dialog.open(PostEditComponent, {
      width: '500px',
      // data: { text: 'POST TEXT' }
      data: post
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.commentBoxOpened = false;
    this.replyBoxOpened = false;

  }

  commentText;
  replyText;
  commentBoxOpened = false;
  commentInEditMode = false;
  replyBoxOpened = false;
  reactedOn = false;


  commentAuthor = {
    id: 1,
    name: 'Ahmed Adel',
    description: 'Web Developer',
    profileImageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    timeSinceAuthorPosted: '1 m'
  };


  // comment = this.postService.posts[post].comments[this.postService.posts[post].length];

  deletePost(post) {
    this.postService.deletePost(post);
  }

  deleteComment(post, comment) {
    this.postService.deleteComment(post, comment);
  }

  deleteReply(post, comment, reply) {
    this.postService.deleteReply(post, comment, reply);
  }

  onCommentSubmit(post) {
    const comment = new Comment(
      {
        id: 1,
        name: 'Ahmed Adel',
        description: 'Web Developer',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
        timeSinceAuthorPosted: '1 m'
      },
      this.commentText,
      0,
      [],
      false
    );

    this.postService.posts[this.postService.posts.indexOf(post)].comments.push(comment);
    console.log(this.postService.posts);
    this.addCommentForm.resetForm();

  }

  switchCommentToEditMode(comment) {
    comment.inEditMode = true;
  }

  switchReplyToEditMode(reply) {
    reply.inEditMode = true;
  }

  onCommentEdit(post, comment, addCommentForm) {
    console.log(this.addCommentForm.value);

    this.postService.editComment(post, comment, addCommentForm.value.comment);
    comment.inEditMode = false;
  }

  onReplyEdit(post, comment, reply, addReplyForm) {
    console.log(this.addReplyForm.value);

    this.postService.editReply(post, comment, reply, addReplyForm.value.reply);
    reply.inEditMode = false;
  }

  onReplySubmit(post, comment) {
    const reply = new Comment(
      {
        id: 1,
        name: 'Ahmed Adel',
        description: 'Web Developer',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
        timeSinceAuthorPosted: '1 m'
      },
      this.replyText,
      0,
      [],
      false
    );

    this.postService.posts[this.postService.posts.indexOf(post)].comments[this.postService.posts[this.postService.posts.indexOf(post)].comments.indexOf(comment)].replies.push(reply);
    console.log(this.postService.posts);
    this.addReplyForm.resetForm();

  }

  onReact(post) {
    this.reactedOn = !this.reactedOn;
    this.reactedOn ?
      this.postService.posts[this.postService.posts.indexOf(post)].numOfReactions += 1 :
      this.postService.posts[this.postService.posts.indexOf(post)].numOfReactions -= 1;
    console.log(this.postService.posts);

  }

  onCommentBtnClick() {
    this.commentBoxOpened = true;
  }

  onReplyBtnClick() {
    this.replyBoxOpened = true;
    console.log(this.postComment);

    this.commentReply.nativeElement.focus();

  }

  calculateTimeSincePosted(timePostedIn: string) {
    return moment(timePostedIn).fromNow();
  }

  // get diagnostic() { return JSON.stringify(this.comment); }


}
