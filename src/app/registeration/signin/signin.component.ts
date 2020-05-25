import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { AuthService, AuthResponseData } from './signin.services';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  error: string = null;
  done: string = null;

  constructor(private authSerivce: AuthService , private router: Router)  { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    // let authObs:Observable<AuthResponseData>

    this.authSerivce.login(email, password).subscribe(resData => {
      console.log(resData);
      // this.done = 'Done Sucsesfully';
      this.router.navigate(['/profile']);

    }, errorMessage => {
      this.error = errorMessage;
      console.log(errorMessage);
    });

    form.reset();
  }

}

