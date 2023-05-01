import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Form = {
    email: '',
    password: ''
  };
  showErrorMessage = false;
  

  constructor(
    private loginService: LoginService,
     private router: Router,
      ) {}

  onLoginSubmit(loginForm: NgForm) {
   
     this.loginService.login(this.Form).subscribe({
      next: (response) => {
        console.log(response);
        
        
        this.router.navigate(['profile']);
      },
      error: (error) => {
        console.log(error);
        
        this.showErrorMessage = true;
      }
    });
  }

  ngOnDestroy() {
    
  }
}
