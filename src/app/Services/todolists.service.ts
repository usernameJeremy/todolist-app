import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistsService {

  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  createTodoList(todoList: any){
  const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/todo`, { headers },todoList);
  }
}
