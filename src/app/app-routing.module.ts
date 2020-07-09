import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
	{ path: '', redirectTo:'listUser', pathMatch:'full'},
	{ path: 'listUser', component: ListUserComponent},
	{ path: 'addUser', component: AddUserComponent},
	{ path: 'editUser', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
