import { users } from './users';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class userservice {
  formData: users;
  readonly rootURL = 'https://localhost:44356/api';
  list : users[];

  constructor(private http: HttpClient) { }

  postusers() {
    return this.http.post(this.rootURL + '/users', this.formData);
  }
  putusers() {
    return this.http.put(this.rootURL + '/users/'+ this.formData, this.formData);
  }
  deleteusers(id) {
    return this.http.delete(this.rootURL + '/users/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/users')
    .toPromise()
    .then(res => this.list = res as users[]);
  }
}