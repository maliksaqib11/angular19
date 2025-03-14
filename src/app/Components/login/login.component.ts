import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin = true;

  toggleForm() {
    this.isLogin = !this.isLogin;
  }
name :string ="malik";
}
