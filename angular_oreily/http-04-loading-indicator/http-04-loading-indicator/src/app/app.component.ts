import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  errorMsg:string = '';

  constructor(private http: HttpClient, private postService:PostService) {}

  ngOnInit() {
    this.postService.error.subscribe((errorMsg)=>{
      this.errorMsg = errorMsg;
    })
    this.isFetching = true;
    this.postService.getPosts().subscribe((posts)=>{
       this.isFetching = false;
       this.loadedPosts = posts;
    },(error)=>{
      console.log(error);
    })
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // this.http
    //   .post<{ name: string }>(
    //     'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
    //     postData
    //   )
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });
    this.postService.createAndSavePosts(postData)
  }

  onFetchPosts() {
    // Send Http request
   // this.fetchPosts();
   this.isFetching = true;
   this.postService.getPosts().subscribe((posts)=>{
      this.isFetching = false;
      this.loadedPosts = posts;
   })
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(()=>{
      console.log('Delete details succesfully');
      this.loadedPosts = [];
    })
    // Send Http request
  }


}
