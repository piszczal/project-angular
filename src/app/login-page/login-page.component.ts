import { Component } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public err : String;

  constructor(private _service: AuthService, private _router: Router) { }

  loginUser(form: NgForm) {
    if (form.value.username != null && form.value.password != null) {
      const body = { username: form.value.username, password: form.value.password };
      this._service.login(body).subscribe(data => {
        localStorage.setItem('currentUser', JSON.stringify({ token: data.json().token, username: form.value.username, isLogin: true }));
        this._router.navigate(['']);
      },
        err => {
          this._router.navigate(['login'])
          console.log("Something went wrong!");
        })
    } else {
      this.err = "Bad login or password";
      console.log("Empty input!");
    }
  }
}
