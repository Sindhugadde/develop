import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WebFormComponent } from './webform/webform.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent} ,
  { path: 'webform', component: WebFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
