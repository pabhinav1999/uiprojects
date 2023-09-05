import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'sample';

  constructor(private news:NewsService){
     

  }
  

  ngOnInit(): void {
     this.news.openModal();
  }

  ngOnDestroy(): void {
    this.news.closeModal();
  }
  
}
