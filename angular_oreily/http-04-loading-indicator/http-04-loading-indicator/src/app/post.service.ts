import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   error = new Subject<string>();
  constructor(private http:HttpClient) { }

  getPosts(){
     return this.http
      .get<{ [key: string]: Post }>(
        'https://project-1-2e839-default-rtdb.firebaseio.com/data1.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
  }


  createAndSavePosts(postData:Post){
     this.http.post<any>('https://project-1-2e839-default-rtdb.firebaseio.com/data1.json',postData).subscribe(()=>{
      console.log('data posted succesfully');
     },(error)=>{
      this.error.next(error.message);
     })
  }

  deletePosts(){
    return this.http.delete('https://project-1-2e839-default-rtdb.firebaseio.com/data1.json');
  }
}
