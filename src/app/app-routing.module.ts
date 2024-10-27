import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResetGuard } from './guards/reset.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./pages/main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'main-page-profe',
    loadChildren: () => import('./pages/main-page-profe/main-page-profe.module').then( m => m.MainPageProfePageModule)
  },
  {
    path: 'reta-contra',
    loadChildren: () => import('./pages/reta-contra/reta-contra.module').then(m => m.RetaContraPageModule),
    canActivate: [ResetGuard] // Aplicar ResetGuard aquí
  },
  {
    path: 'reset-contra',
    loadChildren: () => import('./pages/reset-contra/reset-contra.module').then(m => m.ResetContraPageModule),
    canActivate: [ResetGuard] // Aplicar ResetGuard aquí
  }
  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
