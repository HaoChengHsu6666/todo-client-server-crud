// 登入組件 (LoginComponent) 檔案
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // 確保這個路徑是正確的，並且 AuthService 有被引入

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;
  inputChanged: boolean = false; // 用於 CanDeactivate Guard 的判斷

    // 確保這裡有注入 AuthService
  constructor(private authService: AuthService, private router: Router) {}

    // 檢查輸入是否有變更，用於設定 inputChanged 旗標
  onInputChange(): void {
    // 只有當 username 或 password 有內容時，才將 inputChanged 設為 true
    this.inputChanged = this.username.length > 0 || this.password.length > 0;
  }

  login(): void {
    // 這裡會呼叫 AuthService 的 login 方法，根據您 AuthService 中的 'Chris' 和 '0' 邏輯進行判斷
    const success = this.authService.login(this.username, this.password);

    if (success) {
      this.loginFailed = false;
      this.inputChanged = false; // 登入成功，將此標記設為 false，避免在成功登入後離開時被 Guard 攔截
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
      // 根據指示，這裡使用 console.error 輸出錯誤訊息，您可以自行實作更友善的 UI 提示
      console.error('帳號或密碼錯誤!!!');
    }
  }

  /**
 * 按下登入的按鈕時會觸發的函式
 *
 * @memberof LoginComponent
 */
  anotherLogin(): void {
    this.router.navigate([''], {
      queryParams: {
        name: 'Leo'
      }
    });
  }
}
