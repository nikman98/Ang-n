import { Component, OnInit } from '@angular/core';
import {commentdata} from '../commentdata';
import {CommentserveService} from '../commentserve.service';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  msg : string;
  // commentfrmhtml : string;
  cmtobj : commentdata;
  cmtobjarr : Array<commentdata> =[];
constructor(private commentserv : CommentserveService, private routeserve : MyrouteService) //dependency injection
{
this.cmtobj=new commentdata();
this.cmtobj.title=localStorage.getItem('title');
this.cmtobj.author=localStorage.getItem('author');
this.cmtobj.description=localStorage.getItem('description');
this.cmtobj.urlToImage=localStorage.getItem('urlToImage');
this.cmtobj.createdby=localStorage.getItem('createdby');
console.log("this is in comment");

}


ngOnInit():void
{
  
}

addcmt()
{
  // this.cmtobj.commentnws=this.commentfrmhtml;
  this.cmtobjarr.push(this.cmtobj);
  this.commentserv.addstudent(this.cmtobj).subscribe(
    (sobj)=>{
      console.log("Comment added");
      alert("Yay! Comment Added!!");
      this.routeserve.routeToHome();
  },
    (err)=>
    {
      console.log("Error");
      alert("Please try again later!");
      this.routeserve.routeToHome();
    }
  );


this.cmtobj = new commentdata();



} 



}