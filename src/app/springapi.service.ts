import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class SpringapiService {

   url :string;
   urltoreg : string;
   urltoupdate : string;
  constructor(private httpclient : HttpClient) { 

    this.url='http://localhost:9098/api/authenticate/login';
    this.urltoreg = 'http://localhost:9098/api/authenticate/addUser';
    // this.urltoupdate='http://localhost:9098/api/authenticate/update';
    
  }

  registerUser(data)
  {
    return this.httpclient.post(this.urltoreg,data);
  }

  updateUser(data)
  {
    let userId = localStorage.getItem('mailid'); 
    return this.httpclient.put(`http://localhost:9098/api/authenticate/${userId}`,data);
  }

  authenticateUser(data)
  {
    return this.httpclient.post(this.url,data);
  }

  setbearerToken(tok)
  {
    sessionStorage.setItem("mytoken",tok);
  }

  getbearerToken()
  {
    return sessionStorage.getItem("mytoken");
  }

 


}
