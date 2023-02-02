import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './courses/home/home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'courses'},
  {
      path: 'courses',
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'home', component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
