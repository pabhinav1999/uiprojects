import { Directive, ElementRef, OnInit,  } from "@angular/core";

@Directive({
    selector:'[appBasicHighLight]'
})
export class basicHighlight implements OnInit {
 constructor(private elementRef:ElementRef){}

 ngOnInit(){
   this.elementRef.nativeElement.style.backgroundColor = 'green';
   this.elementRef.nativeElement.value = 10;
 }
}