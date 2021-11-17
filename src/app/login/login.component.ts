import { Component, OnInit } from '@angular/core';
import { Usuarios } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Usuarios = {
    email: null,
    senha: null,
  };

  constructor() {}

  ngOnInit(): void {}
}
