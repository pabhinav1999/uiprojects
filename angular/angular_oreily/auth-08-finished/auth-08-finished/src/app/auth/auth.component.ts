import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ViewContainerRef } from '@angular/core';

import { AuthService, AuthResponseData } from './auth.service';
import { AlertComponent } from './alert/alert.component';
import { PlacholderDirective } from '../shared/placholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlacholderDirective,{static:false}) alerthost:PlacholderDirective;
  private closeSub : Subscription;

  constructor(private authService: AuthService, private router: Router, private viewrefContainer:ViewContainerRef) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorMessage(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onCloseModale(){
    this.error = null;
  }

  private showErrorMessage(message:string){
    //   const alrtComp = this.viewrefContainer.createComponent(AlertComponent);
        const hostViewcontainerRef = this.alerthost.viewContainerRef;
        hostViewcontainerRef.clear();
      const a =  hostViewcontainerRef.createComponent(AlertComponent);
      a.instance.message = 'hi';
     this.closeSub =  a.instance.close.subscribe(()=>{
           this.closeSub.unsubscribe();
          hostViewcontainerRef.clear();
      })
        

  }
}
