import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlacholder]'
})
export class PlacholderDirective {

  constructor(
    public viewContainerRef:ViewContainerRef
  ) { 
    
  }

}
