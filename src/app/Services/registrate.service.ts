import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrateService {

  constructor(private http: HttpClient) { }

  register(form: any) {
    return this.http.post('http://localhost:3000/auth/register', form);
  }
}
