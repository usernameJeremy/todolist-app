import { Component } from '@angular/core';
import { RegistrateService } from '../Services/registrate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent {

  showErrorMessage = false;

  form = {
    name : "",
    email : "",
    password : "",
  }

  constructor(
    private registrationService: RegistrateService,
    private router: Router,
  ){}



  OnRegistrate() {
    this.registrationService.register(this.form).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
