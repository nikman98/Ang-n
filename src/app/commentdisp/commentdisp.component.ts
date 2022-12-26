import { Component, OnInit } from '@angular/core';
import { commentdata } from '../commentdata';
import { CommentserveService } from '../commentserve.service';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-commentdisp',
  templateUrl: './commentdisp.component.html',
  styleUrls: ['./commentdisp.component.css']
})
export class CommentdispComponent implements OnInit {

  cmtArticles: any;
  comment2fetch: any;
  mSources: Array<any>;
  tempstr : string;
 
  constructor(private comentpull : CommentserveService, private route : MyrouteService ) 
  {
    
    // this.newstoadd=new newsnew();
    console.log('app component constructor called');
  }


ngOnInit(){

  this.comentpull.getdataforcmts().subscribe(
    (data) => {console.log(data);
      this.cmtArticles = data;
    })
}


DeleteData(val)
{
  
   
    this.tempstr = val;
    localStorage.setItem('ARemove',this.tempstr);
    console.log(this.tempstr);
    
    this.comentpull.deletedatacmt().subscribe(
      (data) => {
        // console.log(data);
        console.log("DELETED DATA");

        this.comentpull.getdataforcmts().subscribe(
          (data) => {
            this.cmtArticles = data;
            console.log(data);
         }
          )
     },
     (err)=>{
      //  console.log();
       console.log(err);
     }
      )
    // for (var i = 0; i < this.mArticles.length; i++)
    // {
          
    //      if (this.tempstr == this.mArticles[i].title)
    //      {console.log(this.mArticles[i]);
    //       this.newstodelete = this.mArticles[i];
    //     }
    // }
    

    // console.log(this.newstoadd);
    // localStorage.setItem('title',this.newstoadd.title);
    // localStorage.setItem('author',this.newstoadd.author);
    // localStorage.setItem('description',this.newstoadd.description);
    // localStorage.setItem('url',this.newstoadd.url);
    // localStorage.setItem('urlToImage',this.newstoadd.urlToImage);
    // localStorage.setItem('publishedAt',this.newstoadd.publishedAt);
    // localStorage.setItem('content',this.newstoadd.content);
    // localStorage.setItem('createdby',localStorage.getItem('mailid'));
    // this.route.routeToFavnews();
  
}



}


