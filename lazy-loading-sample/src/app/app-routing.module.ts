import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
 { 
   path:'auth',
   loadChildren: ()=> import ('./auth/auth.module').then(m=>m.AuthModule)
 },
 {
   path:'commons',
   loadChildren: ()=> import('./common/common.module').then(m=>m.CommonModule)
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
