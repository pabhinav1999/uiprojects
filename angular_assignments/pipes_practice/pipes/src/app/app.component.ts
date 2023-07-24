import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  filtervalue = '';
  students:any = [{
    name:'John Doe',
    marks:347,
    gender:'male',
    maxMarks: 468
  },{
    name:'John Done',
    marks:'547',
    gender:'female',
    maxMarks: 675
  },{
    name:'John Doenin',
    marks:'747',
    gender:'male',
    maxMarks: 877
  }]
}
