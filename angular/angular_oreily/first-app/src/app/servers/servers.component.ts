import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverId = 10;
  serverName = 'server1';

  constructor() { 
     setTimeout(()=>{
      this.allowNewServer = true;
     },2000)
  }

  ngOnInit(): void {
  }

}