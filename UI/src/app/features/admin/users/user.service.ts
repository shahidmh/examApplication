import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getCharacters() {
    return this
      .http
      .get(`${environment.url}user/getAllUser`);
  }
  addUser(user) {
    return this
      .http
      .post(`${environment.url}user/insertUser`, user);
  }
}
