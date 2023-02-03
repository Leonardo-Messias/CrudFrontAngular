import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpCliente : HttpClient ) { }

  list() : Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Web'},
      { _id: '2', name: 'Java', category: 'Back-end'},
      { _id: '3', name: '.Net', category: 'Back-end'},
      { _id: '4', name: 'WebDeveloper FullStack', category: 'FullStack'},
    ];
  }
}
