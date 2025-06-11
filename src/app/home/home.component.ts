import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalId: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (!this.authService.isLoggedIn()) {
        alert('登入已失效，請重新登入');
        this.router.navigate(['/login']);
      }
    }, 5000); // 每5秒檢查一次
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
