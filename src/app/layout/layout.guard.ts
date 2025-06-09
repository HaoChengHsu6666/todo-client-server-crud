import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (!this.authService.isLoggedIn()) {
      alert('尚未登入，請先登入！');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}