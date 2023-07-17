import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any[] = [];

  constructor(private service:CourseServiceService) { }
  ngOnInit(): void {
    this.courses = this.service.courses;
  }

}
