import { Component,  OnInit } from '@angular/core';
import { MyrouteService } from '../myroute.service';
import {newstopush} from '../newstopush';
import {NewstopushserveService} from '../newstopushserve.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


  
  msg : string;
  newsobj : newstopush;
  newsobjarr : Array<newstopush> =[];
constructor(private newsserv : NewstopushserveService, private routeserve : MyrouteService) //dependency injection
{
this.newsobj=new newstopush();
this.newsobj.title=localStorage.getItem('title');
this.newsobj.author=localStorage.getItem('author');
this.newsobj.description=localStorage.getItem('description');
this.newsobj.url=localStorage.getItem('url');
this.newsobj.urlToImage=localStorage.getItem('urlToImage');
this.newsobj.publishedAt=localStorage.getItem('publishedAt');
this.newsobj.content=localStorage.getItem('content');
this.newsobj.createdby=localStorage.getItem('createdby');
console.log("this is in favoriteview");

}


ngOnInit():void
{
 this.addplayer();
}

addplayer()
{
  
  this.newsobjarr.push(this.newsobj);
  this.newsserv.addstudent(this.newsobj).subscribe(
    (sobj)=>{console.log("student added");
    alert("Yay! News added to favorites!!");
    this.routeserve.routeToHome();},
    (err)=>
    {
      console.log("Error");
      alert("Please try again later!");
      this.routeserve.routeToHome();
    }
  );


this.newsobj = new newstopush();

} 



}