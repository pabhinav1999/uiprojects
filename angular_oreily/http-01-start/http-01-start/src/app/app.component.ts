import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.post('https://http-requests-prac-cc79d-default-rtdb.firebaseio.com/posts.json',postData).subscribe((responseData)=>{
      console.log(responseData);
    })
    console.log(postData);
  }

  onFetchPosts() {
   this.fetchPosts();
    // Send Http request
  }

  private fetchPosts(){
    this.http.get('https://http-requests-prac-cc79d-default-rtdb.firebaseio.com/posts.json').subscribe((responseData)=>{
      console.log(responseData);
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
