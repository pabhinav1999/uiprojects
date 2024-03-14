import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  selectedFile: any;

  constructor( private router: Router, public userService: UsersService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
       if(!this.userService.user){
        let user = localStorage.getItem('user');
        if(user){
          this.userService.user = JSON.parse(user);
        }else{
        this.router.navigate(['/login']);
        }
       }
  }

  onFileSelected(eve: any) {
    this.selectedFile = eve.target.files[0]
    console.log(eve);
    console.log('file selected');
  }

  post() {
    if(this.selectedFile){
      this.upLoadFile().then((imageURL) => {
        console.log(imageURL);
      })
    }
  }

  upLoadFile(){
    return new Promise((resolve,reject)=>{
      let n = Date.now();
    const file = this.selectedFile;
    const filePath = `images/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    task.snapshotChanges().pipe(
      finalize(()=>{
        let imageURL = fileRef.getDownloadURL();
        console.log(imageURL);
        imageURL.subscribe((url:any) => {
          if(url){
            console.log(url);
            resolve(url);
          }
        })
      })
    ).subscribe( (url) => {
      if(url){
        console.log(url);
      }
    })
    })
    
  }

  postSchema = {
    username: '',
    imageURL: '',
    text: '',
    likes: [],
    comment: [{ username: '',comment: ''}]
  }

}
