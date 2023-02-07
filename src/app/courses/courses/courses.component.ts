import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> ;

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CourseService, public dialog: MatDialog) {

    this.courses$ = this.courseService.list().pipe(
      catchError (error => { // catchError é um operador RxJS, que permite tratar erros
        this.onError('Error Loading Courses'); // chama o método onError, que abre o dialog
        return of([]); // observable que retorna um array vazio
      })
    );
  }

  ngOnInit(): void {}

  onError( errormsg: string ) {
    this.dialog.open(ErrorDialogComponent, {
      data: errormsg,
    });
  }
}

