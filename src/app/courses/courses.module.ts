import { SharedModule } from './../shared/shared.module';
import { ErrorDialogComponent } from './../shared/components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CoursesComponent, HomeComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
  ],
})
export class CoursesModule {}
