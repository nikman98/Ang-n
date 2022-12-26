import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/Rx';
import { newstopush } from './newstopush';
import { SpringapiService } from './springapi.service';


@Injectable({
  providedIn: 'root'
})
export class NewstopushserveService {

  newsobj : newstopush;
  newsobjArr : Array<newstopush>=[];
  newsget : Array<newstopush>=[];
  newssubject : BehaviorSubject<Array<newstopush>>;

  constructor(private authservice: SpringapiService, private httpclient : HttpClient){
    this.newsobj = new newstopush();
    this.newssubject = new BehaviorSubject([]);
  }

  addstudent(newsobj : newstopush) : Observable<newstopush>
  {
    let tok=this.authservice.getbearerToken();
 return this.httpclient.post<newstopush>('http://localhost:8082/api/v1/product',newsobj,
 {
  headers : new HttpHeaders().set('Authorization',`Bearer ${tok}`)
   }
 ).do( (nplayer) => 
  {
    this.newsobjArr.push(nplayer);
    this.newssubject.next(this.newsobjArr);
  } )

  }


  getdatafornews():Observable<any>
  {
    let userId = localStorage.getItem('createdby');
    let token = this.authservice.getbearerToken();
    return this.httpclient.get<any>(`http://localhost:8082/api/v1/product/${userId}`,
 {
  headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
   }
 )

  }


  deletedataNews():Observable<any>
  {
    let userId = localStorage.getItem('createdby');
    let newstoDel = localStorage.getItem('ARemove');
    let token = this.authservice.getbearerToken();
    console.log("Inside service");
    return this.httpclient.delete<any>('http://localhost:8082/api/v1/product/'+ userId +'/'+ newstoDel,
 {
  headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
   }
 )

  }

  }


