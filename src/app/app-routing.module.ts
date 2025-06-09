import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutGuard } from './layout/layout.guard';


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
      component: LoginComponent
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
          loadChildren: () => import('./feature/feature.module').then(module => module.FeatureModule)
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
