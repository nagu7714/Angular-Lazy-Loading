import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes:Routes=[
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent}

]

@NgModule({
  declarations: [ContactusComponent,AboutusComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonModule { }
