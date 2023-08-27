import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class StudentService {

 students : any[] = [{name: 'Abhinav',id: 24},
 {name: 'Ajay',id: 25}]
}