import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {
  
  @HostBinding('style.font') font
  constructor(private elref:ElementRef, private render:Renderer2) { }

  ngOnInit(): void {
      this.render.setStyle(this.elref.nativeElement,'background-color','pink');
  }

  @HostListener('mouseenter') mouseover() {
     this.render.setStyle(this.elref.nativeElement,'background-color','transparent');
  }

  @HostListener('mouseleave') mouseleave() {
    this.render.setStyle(this.elref.nativeElement,'background-color','yellow');
  }

}
