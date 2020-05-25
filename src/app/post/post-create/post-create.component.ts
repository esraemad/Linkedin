import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/Model/post';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  @ViewChild('postForm') postForm: NgForm;
  @ViewChild('postText') postText: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<PostCreateComponent>,
    public postService: PostService
    // , @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  timestamp = new Date().toUTCString();

  postAuthor = {
    id: 1,
    name: 'Ahmed Adel',
    description: 'Web Developer',
    profileImageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    timeSinceAuthorPosted: 'a few seconds ago'
  };

  ngOnInit(): void {
    this.postText.nativeElement.focus();

  }


  post = new Post(
    1,
    this.postAuthor,
    '',
    0,
    [],
    ''
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.postService.posts.push(this.post);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.post); }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
