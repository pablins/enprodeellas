import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiURL = 'http://localhost:8000/';

  loginService = 'api/login/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL + this.loginService, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}