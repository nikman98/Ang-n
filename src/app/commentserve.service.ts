import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/Rx';
import { commentdata } from './commentdata';
import { SpringapiService } from './springapi.service';

@Injectable({
  providedIn: 'root'
})
export class CommentserveService {

  cmtobj : commentdata;
  cmtobjArr : Array<commentdata>=[];
  cmtsubject : BehaviorSubject<Array<commentdata>>;

  constructor(private authservice: SpringapiService, private httpclient : HttpClient){
    this.cmtobj = new commentdata();
    this.cmtsubject = new BehaviorSubject([]);
  }

  addstudent(cmtobj : commentdata) : Observable<commentdata>
  {
    let tok=this.authservice.getbearerToken();
 return this.httpclient.post<commentdata>('http://localhost:8084/api/v1/comment',cmtobj,
 {
  headers : new HttpHeaders().set('Authorization',`Bearer ${tok}`)
   }
 ).do( (nplayer) => 
  {
    this.cmtobjArr.push(nplayer);
    this.cmtsubject.next(this.cmtobjArr);
  } )

  }

  getdataforcmts():Observable<any>
  {
    let userId = localStorage.getItem("createdby");
    let token = this.authservice.getbearerToken();
    return this.httpclient.get(`http://localhost:8084/api/v1/comment/${userId}`,
 {
  headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
   }
 );

  }

  deletedatacmt():Observable<any>
  {
    let userId = localStorage.getItem('createdby');
    let cmttoDel = localStorage.getItem('ARemove');
    let token = this.authservice.getbearerToken();
    console.log("Inside service");
    return this.httpclient.delete<any>('http://localhost:8084/api/v1/comment/'+ userId +'/'+ cmttoDel,
 {
  headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
   }
 )

  }


}