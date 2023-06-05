import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm:FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project':new FormControl(null,[Validators.required,this.forbiddenProjectName.bind(this)]),
      'email':new FormControl('test@test.com',Validators.required),
      'condition':new FormControl('Critical',Validators.required)
    })
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  forbiddenProjectName(control:FormControl):{[s:string]:boolean} {
    if(control.value === 'test'){
      return {'isProjectNameForbidden':true}
    }
    return null;
  }

 

  
}
