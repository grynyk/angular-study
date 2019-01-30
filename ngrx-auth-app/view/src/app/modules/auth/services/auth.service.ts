import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private BASE_URL = 'http://localhost:1330';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${this.BASE_URL}/login`, { email, password });
  }

  signup(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/register`, { email, password });
  }
}