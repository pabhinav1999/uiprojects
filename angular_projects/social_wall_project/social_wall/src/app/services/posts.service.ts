import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 
  constructor(private http: HttpClient ) { }

  public createNewPost(postObj: any ): Observable<any>{
     return this.http.post('http://localhost:3000/posts',postObj)
  }

  public getPosts(email: any): Observable<any> {
    return this.http.get(`http://localhost:3000/posts?username.email=${email}`)
  }
}
