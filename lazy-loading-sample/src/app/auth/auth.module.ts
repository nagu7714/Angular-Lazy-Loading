import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared.module';

const routes:Routes=[
{path:'login', component:LoginComponent},
{path:'signup',  component:SignupComponent}
]

@NgModule({
  declarations: [LoginComponent,LoginComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class AuthModule { }
