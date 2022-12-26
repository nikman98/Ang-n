import { Component, OnInit } from '@angular/core';
import { MyrouteService } from '../myroute.service';
import { newsnew } from '../newsview/newsnew';
import { SearchservService } from '../searchserv.service';
@Component({
  selector: 'app-searchdisp',
  templateUrl: './searchdisp.component.html',
  styleUrls: ['./searchdisp.component.css']
})
export class SearchdispComponent implements OnInit {
  

  mArticles: newsnew[];
  newstoadd: newsnew;
  mSources: Array<any>;
  tempstr : string;
  constructor(private newsserve : SearchservService, private route : MyrouteService ) 
  {
    
    this.newstoadd=new newsnew();
    console.log('app component constructor called');
  }

  
  
  ngOnInit(){
    localStorage.setItem('title','');
    localStorage.setItem('author','');
    localStorage.setItem('description','');
    localStorage.setItem('url','');
    localStorage.setItem('urlToImage','');
    localStorage.setItem('publishedAt','');
    localStorage.setItem('content','');
    console.log("this is in newsview");



    this.newsserve.initArticles().subscribe(
      (data) => {this.mArticles = data['articles'] ;
                  console.log(data);})
  }
  // setfavnew(data)
  // {
  //   sessionStorage.setItem(tempdata ,data);
  // }

  addtofavRE(val)
  {
    if(sessionStorage.getItem("mytoken")==null)
    {
      this.route.routeToLogin();
    }
   else
   {

    this.tempstr = val;
    for (var i = 0; i < this.mArticles.length; i++)
    {
          
         if (this.tempstr == this.mArticles[i].title)
         {console.log(this.mArticles[i]);
          this.newstoadd = this.mArticles[i];
        }
    }
    

    console.log(this.newstoadd);
    localStorage.setItem('title',this.newstoadd.title);
    localStorage.setItem('author',this.newstoadd.author);
    localStorage.setItem('description',this.newstoadd.description);
    localStorage.setItem('url',this.newstoadd.url);
    localStorage.setItem('urlToImage',this.newstoadd.urlToImage);
    localStorage.setItem('publishedAt',this.newstoadd.publishedAt);
    localStorage.setItem('content',this.newstoadd.content);
    localStorage.setItem('createdby',localStorage.getItem('mailid'));
    this.route.routeToFavnews();
  }

  }


  addcomnt(val)
  {
    if(sessionStorage.getItem("mytoken")==null)
    {
      this.route.routeToLogin();
    }
   else
   {

    this.tempstr = val;
    for (var i = 0; i < this.mArticles.length; i++)
    {
          
         if (this.tempstr == this.mArticles[i].title)
         {console.log(this.mArticles[i]);
          this.newstoadd = this.mArticles[i];
        }
    }
    

    console.log(this.newstoadd);
    localStorage.setItem('title',this.newstoadd.title);
    localStorage.setItem('author',this.newstoadd.author);
    localStorage.setItem('description',this.newstoadd.description);
    localStorage.setItem('url',this.newstoadd.url);
    localStorage.setItem('urlToImage',this.newstoadd.urlToImage);
    localStorage.setItem('publishedAt',this.newstoadd.publishedAt);
    localStorage.setItem('content',this.newstoadd.content);
    localStorage.setItem('createdby',localStorage.getItem('mailid'));
    this.route.routeToComment();
  }

  }

}