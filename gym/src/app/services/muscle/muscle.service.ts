import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  
  public url = environment.url;
  constructor(private http: HttpClient) { }


  getMuscles(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(this.url+"muscles",{headers: headers});

  }
}
