import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
  {
    path:'register',
    component:RegisterationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'adminDashboard',
    component:AdminDashboardComponent
  },
  // {
  //   path:'userDashboard',
  //   component:UserDashboardComponent
  // },
  {
    path: 'userDashboard', component: UserDashboardComponent, children: [
      { path: 'cart', component: CartComponent }
    ]
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
