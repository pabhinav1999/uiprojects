import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];
  queryparamsSubs:Subscription;

  constructor(private serversService: ServersService,
    private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
  }

  onclick(){
    this.router.navigate(['../users'], {relativeTo:this.route});
  }


}
