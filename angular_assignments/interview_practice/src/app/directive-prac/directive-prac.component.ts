import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-directive-prac',
  templateUrl: './directive-prac.component.html',
  styleUrls: ['./directive-prac.component.css']
})
export class DirectivePracComponent implements OnInit {
 
   isSpecial: boolean = true;
   userName = 'Abhinav';
  currentStyles:any;
  cartItems : string[] = ["Shoes","socks","cards"];
  students: any[] = [];
  constructor(private studentService: StudentService) { }
  

  ngOnInit(): void {
    this.students = this.studentService.students;
    this.setCurrentClasses();
  }

  setCurrentClasses(){
    this.currentStyles = {
      'background-color': (this.isSpecial ? 'pink' : 'green')
    }
  }
  


}
