import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://project-1-2e839-default-rtdb.firebaseio.com/data1.json',postData).subscribe((responseData)=>{
      console.log(responseData);
    })
    console.log(postData);
  }

  onFetchPosts() {
    this.http.get('https://project-1-2e839-default-rtdb.firebaseio.com/data1.json').pipe(map((response)=>{
      const newResArray = [];
      for ( let key in response){
        newResArray.push({...response[key],id:key})
      }
      return newResArray;
    })).subscribe((newResArray)=>{
      console.log(newResArray);
    })
    // Send Http request
  }

  onClearPosts() {
    this.http.delete('https://http-requests-prac-cc79d-default-rtdb.firebaseio.com/data1.json')
    console.log('deleted succesfully');
    // Send Http request
  }
}
