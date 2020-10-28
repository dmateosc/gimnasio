import { Component, OnInit, ViewChild,AfterViewInit, ViewChildren ,ElementRef, Output, EventEmitter} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';
import { Users } from 'src/app/models/user/users';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css'],
})
export class NavbarMenuComponent implements OnInit, AfterViewInit {
  public submitted: boolean;
  public currentRoute: string;
  public _id: string;
  public nickname : String;
  public stopCount: Number;
  @ViewChildren(UserComponent) userComponent: UserComponent;
  
  constructor(private authGuard: AuthenticationGuard, private router: Router,
    private _userService: UserService) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
        this.currentRoute = event.url;
      });

   
  }
  ngOnInit(): void {   
    this.conseguirUsuario() 
  }
  ngAfterViewInit(){
    console.log(this.userComponent);
  }
  conseguirUsuario() {
    let userAux: Users;
    this._id = JSON.parse(localStorage.getItem('currentUser')).id;
    this._userService.getUser(this._id).subscribe(
      (response) => {
        userAux = response.user;
        this.nickname = userAux.nickname;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }


}
