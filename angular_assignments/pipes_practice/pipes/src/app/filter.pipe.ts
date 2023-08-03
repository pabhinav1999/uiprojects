import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(students: any[], filtervalue:string): any {
    console.log('filter pipe called');
    if(filtervalue === ''){
       return students;
    } 
    else {
      return students.filter((student)=>{return student.gender === filtervalue});
    }
  }

}
