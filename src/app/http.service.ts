import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) {}
  getUser(name: string): Observable<User> {
    const url = `https://api.github.com/users/${name}`;
    console.log(this.http.get<User>(url))
    return this.http.get<User>(url);
  }
}
