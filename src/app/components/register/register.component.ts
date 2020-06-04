import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = <any>{}

  registerValid = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit() {
    let body = JSON.stringify(this.registerUserData)
    let bodyJSON = JSON.parse(body)

    this.authService.registerUser(bodyJSON).subscribe(data => {
      this.registerValid = true
      console.log(data)
    })
  }

}
