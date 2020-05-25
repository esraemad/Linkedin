import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/Model/post';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { PostComponent } from '../post.component';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  @ViewChild('postForm') postForm: NgForm;
  @ViewChild('postText') postText: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<PostEditComponent>,
    @Inject(MAT_DIALOG_DATA) public postToEdit: any,
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

  post = this.postToEdit;
  postBeforeEdit = this.postToEdit;

  ngOnInit(): void {
    console.log(this.post);
    this.postText.nativeElement.focus();


  }


  // post = new Post(
  //   1,
  //   this.postAuthor,
  //   'mkmk',
  //   0,
  //   [],
  //   ''
  // );

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.postService.editPost(this.postBeforeEdit, this.post.text);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.post); }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
