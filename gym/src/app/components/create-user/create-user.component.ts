import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { Users } from 'src/app/models/user/users';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService],
})
export class CreateUserComponent implements OnInit {
  public status: string;
  public user: Users;
  public passwordValidation: string;
  public filesToUpload: Array<File>;
  userForm: FormGroup;
  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
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
      null
    );
  }

  ngOnInit(): void {}

  checkPassword(): boolean {
    return this.user._password != this.passwordValidation;
  }
  onSubmit(e) {
    this.userForm = this._formBuilder.group(e.form.controls);
    this._userService.createUser(this.user).subscribe(
      (response) => {
        this.status = 'Registro realizado correctamente';
        setTimeout(() => this._router.navigate(['/login']),1000)
      },
      (error) => {}
    );
  }
  fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  comeBack(){
    this._router.navigate(['/login']);
  }
}
