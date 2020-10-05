import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Global } from './gobal';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public url = environment.url;
  constructor(private http: HttpClient) { }

    isLogged(){
      if(localStorage.getItem('currentUser')){
        return true
      }
      else{
        return false;
      }

    }

    login(nickname: string, password: string) {
        return this.http.post<any>(this.url+'login', { nickname: nickname, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
