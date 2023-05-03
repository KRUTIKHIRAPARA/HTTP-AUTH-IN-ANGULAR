import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpWorkComponent } from './http-work/http-work.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:HttpWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
