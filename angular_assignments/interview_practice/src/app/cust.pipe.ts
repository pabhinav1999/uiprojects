import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [arg1,arg2]=args;
    return value - arg1 - arg2 ;
  }

}
