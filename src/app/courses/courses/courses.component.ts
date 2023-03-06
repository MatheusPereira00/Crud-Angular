import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses: Course[]= [
    {_id: '1', name: 'Angular', category: 'front-end'},
    {_id: '2', name: 'JavaScript', category:'front-end'},
    {_id: '3', name: 'Python', category: 'Backend'},
    {_id: '4', name: 'Css', category: 'front-end'},
    {_id: '5', name: 'Html', category: 'front-end'},
    {_id: '6', name: 'React', category: 'front-end'}
  ];
  
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses = [];
  }

  ngOnInit(): void {
    
  }

}
