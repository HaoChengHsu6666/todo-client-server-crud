import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;


  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.loginFailed = false;
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
      alert('帳號或密碼錯誤!!!');
    }
  }
}