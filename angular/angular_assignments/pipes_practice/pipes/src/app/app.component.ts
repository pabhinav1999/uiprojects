import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
   _filtervalue = '';
  filteredStudents: any[] = [];

  totalLength = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve(this.filteredStudents.length);
    },2000)
  }) 

  get filtervalue(){
    return this._filtervalue;
  }
  
  set filtervalue(value:any){
    this._filtervalue = value;

  }
  students:any = [{
    name:'John Doe',
    marks:347,
    gender:'male',
    maxMarks: 468
  },{
    name:'John Done',
    marks:'547',
    gender:'female',
    maxMarks: 675
  },{
    name:'John Doenin',
    marks:'747',
    gender:'male',
    maxMarks: 877
  }];

  addStudent(){
    this.students.push({
      name:'John Done2',
      marks:'247',
      gender:'female',
      maxMarks: 675
    })
  }

  filterStudentsMethod(filtervalue:string){
    if(filtervalue === ''){
      this.filteredStudents = this.students;
   } 
   else {
     this.filteredStudents =  this.students.filter((student:any)=>{return student.gender === filtervalue});
   }
  }
}
