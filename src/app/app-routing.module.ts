import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrateComponent } from './registrate/registrate.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrate', component: RegistrateComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'todolist', component: TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
