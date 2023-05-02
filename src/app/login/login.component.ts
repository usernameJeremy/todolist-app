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
  form = {
    email: '',
    password: ''
  };
  showErrorMessage = false;
  

  constructor(
    private loginService: LoginService,
     private router: Router,
      ) {}

  onLoginSubmit() {
   
     this.loginService.login(this.form).subscribe({
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
