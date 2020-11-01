import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/user/users';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-user',

  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  public user: Users;
  @Output() evento = new EventEmitter();
  static conseguirUsuario: any;
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params.id;
      this.getUser(id);
    });
  }

  getUser(id) {
    this._userService.getUser(id).subscribe(
      (response) => {
        this.user = response.user;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
  
}
