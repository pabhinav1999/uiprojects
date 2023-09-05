import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {
  @ViewChild('serverContentInput',{static:true})  serverContentInput:ElementRef

  @Output('srvCreated') serverCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();

  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();

  serverElements = [];

  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}
  onAddServer(serverNameInput:HTMLInputElement) {
    console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
