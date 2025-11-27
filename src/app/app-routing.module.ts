import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)  },
     
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)  },
      {
  path: 'profile',
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
},


      {
  path: 'my-profile',
  loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

      
      
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
