import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/models/user/users';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public user : Users;
  public passwordValidation : string;
  constructor() {

    this.user = new Users(
      '',
      '',
      '',
      '',
      '',
      '',
      null,
      '',
      null,
      null,
      '',
      null,
      null,
      null,
      false,
      null);

   }

  ngOnInit(): void {
  }

  checkPassword(): boolean{
    return this.user._password!=this.passwordValidation; 
  }
}
