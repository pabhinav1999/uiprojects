import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor() { }
  courses:any[] = [{id:101,author:'Matt Damon',title:'Ford v Ferrari'},
  {id:102,author:'Matt Damon1',title:'Ford v Ferrari2'},
  {id:103,author:'Matt Damon2',title:'Ford v Ferrari3'},
  {id:104,author:'Matt Damon3',title:'Ford v Ferrari4'}]
}
