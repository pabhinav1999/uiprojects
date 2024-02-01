import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http : HttpClient) { }

  public createNewUser(userObj: any ): Observable<any>{
       return this.http.post(`http://localhost:3000/users`,userObj);
    }

  public getUsers(email: string): Observable<any>{
    return this.http.get(`http://localhost:3000/users?email=${email}`);
  }
}
