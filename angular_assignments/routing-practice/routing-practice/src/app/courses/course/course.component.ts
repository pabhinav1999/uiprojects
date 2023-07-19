import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id:any;
  course:any;
  paramsSubscription: Subscription = new Subscription;
  queryParamsSubscription: Subscription = new Subscription;
  editMode:boolean = false;

  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseServiceService, private router:Router) { }
  
  ngOnInit(): void {
  
  this.paramsSubscription = this.activatedRoute.paramMap.subscribe((params)=>{
    console.log(params);
       this.id = params.get('id');
      this.course = this.courseService.courses.find(x => x.id == this.id);
  })

  this.queryParamsSubscription = this.activatedRoute.queryParamMap.subscribe((queryParamMap)=>{
      this.editMode = Boolean(queryParamMap.get('edit'))
  })
  }

  goToFirstCourse(){
    this.router.navigate(['/courses/course',101]);
  }

  onEdit(){
     this.editMode = true;
     this.router.navigate(['/courses/course', this.id], {queryParams:{edit : true}} )
  }

  onUpdate(){
    this.editMode = false;
    this.router.navigate(['/courses/course', this.id])
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
