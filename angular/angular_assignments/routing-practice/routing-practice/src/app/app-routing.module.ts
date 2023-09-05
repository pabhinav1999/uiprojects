import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { HomechildrenComponent } from './homechildren/homechildren.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CourseGuardService } from './course-guard.service';

const appRoutes:Route[] = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent, canActivate:[CourseGuardService]},
  {path:'courses', canActivateChild:[CourseGuardService], children:[{
    path:'course/:id', component:CourseComponent
  }]},
  {path:'home/homechildren',component:HomechildrenComponent},
  {path:'**',component:PagenotfoundComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
