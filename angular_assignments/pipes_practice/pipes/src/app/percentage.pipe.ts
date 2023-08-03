import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
   
  transform(value: number,maxMarks:number): unknown {
    console.log('percentage pipe called');
    return ((value/maxMarks) * 100) .toFixed(2);
  }

}
