import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuthenticated: boolean;
  constructor( private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

}
