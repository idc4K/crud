import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditComponent } from './component/edit/edit.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path : '', component: DashboardComponent},
  {path : 'home', component: HomeComponent},
  {path : 'edit/:id', component: EditComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
