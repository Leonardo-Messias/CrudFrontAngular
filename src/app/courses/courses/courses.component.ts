import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  courses: Course [] = [
    { _id: '1', name: 'Angular', category: 'Web'},
    { _id: '2', name: 'Java', category: 'Back-end'},
    { _id: '3', name: '.Net', category: 'Back-end'},
    { _id: '4', name: 'WebDeveloper FullStack', category: 'FullStack'},
  ];

  displayedColumns = ['name', 'category'];

  constructor() {

  //this.courses = []
  }

  ngOnInit(): void {}
}
