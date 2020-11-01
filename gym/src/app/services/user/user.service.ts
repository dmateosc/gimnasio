import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../../models/user/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = environment.url;
  constructor(private http: HttpClient) { }
  
  
  
  createUser(user: Users): Observable<any>{
    let body = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url+'create-user',body,{headers:headers});
  }

  getUser(id:string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(this.url+'user-id/'+id, {headers:headers});

  }

}


