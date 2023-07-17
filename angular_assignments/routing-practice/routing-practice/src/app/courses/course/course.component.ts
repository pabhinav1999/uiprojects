import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseServiceService) { }
  id:any;
  course:any;
  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params['id'];
   console.log(this.activatedRoute.snapshot);
   this.course = this.courseService.courses.find(x => x.id == this.id);
   console.log(this.course);
  }

}
