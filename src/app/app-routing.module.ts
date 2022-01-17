import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAComponent } from './task-a/task-a.component';
import { TaskbasicComponent } from './taskbasic/taskbasic.component';
import { TasktablesComponent } from './tasktables/tasktables.component';
import { TaskformsComponent } from './taskforms/taskforms.component';
import { TaskvideosComponent } from './taskvideos/taskvideos.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path: 'taskbasic', component: TaskbasicComponent},
  {path:'tasktables', component: TasktablesComponent},
  {path:'taskforms', component: TaskformsComponent},
  {path:'taskvideos', component: TaskvideosComponent},
  {path: '**', component: TaskAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
