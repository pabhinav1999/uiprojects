import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() startEvent = new EventEmitter<number>();
  @Output() stopEvent = new EventEmitter<any>();

  emitEveryOneSecond;
  constructor() { }

  ngOnInit(): void {
  }

  onStartBtn(){
    let count = 0;
     this.emitEveryOneSecond =  setInterval(()=>{
       this.startEvent.emit(count);
       count++;
    },1000)
  }
  onStopBtn() {
    clearInterval(this.emitEveryOneSecond);
    this.stopEvent.emit(null);
  }

}
