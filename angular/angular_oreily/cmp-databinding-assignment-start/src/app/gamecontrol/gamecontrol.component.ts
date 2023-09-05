import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output('') gameStarted = new EventEmitter<{presentNumber:number}>();
  @Output('') gameStopped = new EventEmitter<null>();
   req1;
  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    let i = 0;
    this.req1 = setInterval(()=>{
      this.gameStarted.emit({presentNumber:i});
      i++;},1000)
  }

  onStop(){
    clearInterval(this.req1);
    this.gameStopped.emit(null);
  }

}
