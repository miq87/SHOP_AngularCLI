import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = <any>{}

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._authService.loginUser(this.loginUserData).subscribe(data => {
      console.log(data)
      localStorage.setItem('token', data.token)
      this._router.navigate(['/shop'])
    },
    err => {
      console.log(err)
    })
  }

}
