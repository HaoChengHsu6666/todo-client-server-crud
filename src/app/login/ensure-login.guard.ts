// src/app/login/ensure-login.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'; // 這裡可能不再需要 `of`，但保留 Observable
import { LoginComponent } from './login.component';
import { ModalService } from '../shared/modal.service'; // 引入您將要修正的 ModalService
// import { ConfirmModalComponent } from '../shared/confirm-modal/confirm-modal.component'; // 這裡不再直接使用 ConfirmModalComponent

@Injectable({
  providedIn: 'root'
})
export class EnsureLoginGuard implements CanDeactivate<LoginComponent> {

  constructor(private modalService: ModalService) {
    // 注入 ModalService
  }

   /**
   * 當使用者要離開這個 Guard 所防守的路由時，會觸發這個函式
   *
   * @param {LoginComponent} component - 該路由的 Component 實例
   * @param {ActivatedRouteSnapshot} currentRoute - 當前的路由快照
   * @param {RouterStateSnapshot} currentState - 當前路由狀態的快照
   * @param {RouterStateSnapshot} [nextState] - 欲前往路由的路由狀態的快照 (可選)
   * @returns {(boolean | Observable<boolean> | Promise<boolean>)}
   * @memberof EnsureLoginGuard
   */
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // 判斷 LoginComponent 中是否有未儲存的內容
    if (component.inputChanged) {
      // 呼叫 ModalService 來顯示一個確認模態視窗
      // 這個方法將回傳一個 Promise<boolean>
      // Guard 可以直接回傳這個 Promise
      return this.modalService.openConfirmDialog('您有未儲存的內容，確定要離開嗎？');
    }
    // 如果沒有未儲存的內容，則允許離開
    return true;
  }
}
