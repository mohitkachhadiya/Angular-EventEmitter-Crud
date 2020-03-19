
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { AboutComponent } from './about/about.component'
// import { AdduserComponent } from './adduser/adduser.component';
// import { MessageComponent } from './message/message.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch:'full'},
	{ path : 'list', component: ListComponent},
	{ path : 'add', component: AddComponent},
	{ path : 'edit', component: EditComponent},
	// { path : 'adduser', component: AdduserComponent},
	// { path : '', component: AdduserComponent},
	// { path : 'message', component: MessageComponent},
	// { path : 'About', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
