import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any[], filtervalue:string): any {
    if(filtervalue === ''){
       return students;
    } 
    else {
      return students.filter((student)=>{return student.gender === filtervalue});
    }
  }

}
