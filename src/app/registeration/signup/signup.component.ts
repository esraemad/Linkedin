import { Observable } from 'rxjs';
import { AuthService } from './signup.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  error: string = null;
  done: string = null;

  constructor(private authSerivce: AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authSerivce.signup(email, password).subscribe(resData => {
      console.log(resData);
      this.done = 'Done Sucsesfully';

    }, errorMessage => {
      this.error = errorMessage;
      console.log(errorMessage);
    });

    form.reset();
  }
}
