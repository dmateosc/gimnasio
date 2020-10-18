import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css'],
})
export class NavbarMenuComponent implements OnInit {
  public submitted: boolean;
  public currentRoute: string;
  constructor(private authGuard: AuthenticationGuard, private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
        this.currentRoute = event.url;
      });

   
  }
  ngOnInit(): void {   
     
  }

  submited(): boolean {
    this.submitted =
    this.authGuard.canActivate &&
    this.currentRoute != '/login' &&
    this.currentRoute != '/';
    return this.submitted;
  }


}
