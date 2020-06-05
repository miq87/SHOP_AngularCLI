import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {
    if(this._auth.loggedIn()) {
      return true
    }
    else {
      this._router.navigate(['/login'])
    }
  }

  constructor(private _auth: AuthService, private _router: Router) {

  }
  
}
