import { Component, OnInit } from '@angular/core';
import { MyrouteService } from '../myroute.service';
import { NewsApiService } from '../news-api.service';
import { newstopush } from '../newstopush';
import { NewstopushserveService } from '../newstopushserve.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mArticles: any;
  newstodelete: any;
  mSources: Array<any>;
  tempstr : string;
 
  constructor(private newspushpull : NewstopushserveService, private route : MyrouteService ) 
  {
    
    // this.newstoadd=new newsnew();
    console.log('app component constructor called');
  }


ngOnInit(){
  localStorage.setItem('ARemove','');
  this.newspushpull.getdatafornews().subscribe(
    (data) => {
      this.mArticles = data;
      console.log(data);
   }
    )
}


DeleteData(val)
{
  
  localStorage.setItem('ARemove','');
    this.tempstr = val;
    
    
    localStorage.setItem('ARemove',this.tempstr);
    console.log(this.tempstr);
    
    this.newspushpull.deletedataNews().subscribe(
      (data) => {
        // console.log(data);
        console.log("DELETED DATA");
        // location.reload();
        this.newspushpull.getdatafornews().subscribe(
          (data) => {
            this.mArticles = data;
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
