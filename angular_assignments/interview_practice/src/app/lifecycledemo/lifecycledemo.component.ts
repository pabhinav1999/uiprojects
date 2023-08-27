import { Component, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  templateUrl: './lifecycledemo.component.html',
  styleUrls: ['./lifecycledemo.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class LifecycledemoComponent implements OnInit {

  @Input() enteredValue:string = "Proacademy"
  constructor() {
    console.log("constructor called!");
    console.log(this.enteredValue);
   }

  ngOnChanges(changes : SimpleChanges){
   console.log('ngOnchanges called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

}
