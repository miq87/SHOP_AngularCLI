import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerUrl, loginUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(userData) {
    return this.http.post<any>(registerUrl, userData)
  }
  loginUser(userData) {
    return this.http.post<any>(loginUrl, userData)
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  getToken() {
    return !!localStorage.getItem('token')
  }
}
