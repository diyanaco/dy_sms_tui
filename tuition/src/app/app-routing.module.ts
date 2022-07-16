import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components-primary/login/login.component';
import { SignupComponent } from './components-primary/signup/signup.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    pathMatch: 'full',
    redirectTo : 'login'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  }, 
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
