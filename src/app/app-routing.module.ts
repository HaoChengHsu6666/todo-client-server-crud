// 應用程式路由模組 (AppRoutingModule) 檔案
import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutGuard } from './layout/layout.guard';

import { EnsureLoginGuard } from './login/ensure-login.guard'; // 引入 EnsureLoginGuard

const routes: Routes = [

    // 1. 預設進來就轉 login 頁面
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
      // 2. Login 單獨顯示（不包在 layout 中）
    {
      path: 'login',
      component: LoginComponent,
      canDeactivate: [EnsureLoginGuard] // 將 CanDeactivate Guard 加入 login 路由
    },
      // 3. 登入後才進 LayoutComponent + 子路由
    {
      path: '',
      component: LayoutComponent,
      canActivate: [LayoutGuard], 
      children: [
        {
          path: 'home',
          component: HomeComponent 
        },
        {
          path: 'about',
          component: AboutComponent 
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'feature',
          loadChildren: () => import('./feature/feature.module').then(module => module.FeatureModule) // 假設 feature 模組存在
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
