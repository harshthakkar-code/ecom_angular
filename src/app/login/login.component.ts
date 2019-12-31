import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { customer_class } from '../customer/customer_class';
import { LoginDataService } from './login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginData: LoginDataService, private _router: Router) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      customer_email: new FormControl('yello@gmail.com', [Validators.required, Validators.email]),
      customer_password: new FormControl('parkar111', [Validators.required])
    });
  }
  onLogin() {

    if (this.loginForm.get('customer_email').value != null) {
      this._loginData.login(this.loginForm.value).subscribe(
        (x: customer_class[]) => {

          if (x.length == 1) {

            localStorage.setItem('email', this.loginForm.get('customer_email').value);

            this._router.navigate(['/nav/customer']);

          }
          else {
            alert('invalid');
          }
        }
      );
    }
    else {
      alert('uname or password must not be empty');
    }
  }
}
