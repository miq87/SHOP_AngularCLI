import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registerUrl, loginUrl } from '../config/api';
import { User } from '../models/user';


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
}
