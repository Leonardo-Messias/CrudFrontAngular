import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpCliente: HttpClient) {}

  private readonly API = './assets/acourses.json';

  list() {
    return this.httpCliente.get<Course[]>(this.API).pipe(
      first(),
      delay(3000),
      tap((courses) => console.log(courses))
    );
  }
}
