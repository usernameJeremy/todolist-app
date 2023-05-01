import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(form: any ) {
    return this.http.post('http://localhost:3000/auth/login', form, {responseType: 'text'})
    .pipe(
      tap((token: string) => {
        localStorage.setItem('jwtToken', token);
      })
    );
  }
}
