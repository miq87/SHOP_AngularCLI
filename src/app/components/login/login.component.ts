import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = <any>{}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.loginUser(this.loginUserData).subscribe(data => {
      console.log('Zalogowano!')
      console.log(data)
      localStorage.setItem('token', data.token)
    },
    err => {
      console.log(err)
    })
  }

}
