import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = <any>{}
  registerValid = false

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    this._authService.registerUser(this.registerUserData).subscribe(data => {
      this.registerValid = true
      console.log(data)
      localStorage.setItem('token', data.token)
      this._router.navigate(['/shop'])
    },
    err => {
      console.log(err)
    })
  }
}
