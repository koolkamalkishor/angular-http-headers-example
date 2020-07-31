import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  res;
  err;
  constructor(private http: HttpClient) {    
  }
  getData() {

//         var myHeaders = new Headers();
// myHeaders.append("x-access-token", "goldapi-4kmp9ykdarwzb1-io");
// myHeaders.append("Content-Type", "application/json");


    let headers = new HttpHeaders()
    headers = headers.set("x-access-token", "goldapi-4kmp9ykdarwzb1-io");
    headers = headers.set("Content-Type", "application/json");
    this.http.request('GET', 'https://www.goldapi.io/api/stat', { headers })
        .subscribe(
          res => {
            this.res = res;
            console.log('Result:', res)
          },
          err => {
            console.log('Error', err);
            this.err = err;
          },
        )
  }
}
