import { Component, OnInit } from '@angular/core';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.component.html',
  styleUrls: ['./searchnews.component.css']
})
export class SearchnewsComponent implements OnInit {
  newsfrmhtml : string;
  constructor(private route : MyrouteService) { }

  ngOnInit(): void {

    localStorage.setItem('tosearch','');
  }

  searchnews()
  {
    
    localStorage.setItem('tosearch', this.newsfrmhtml);
    this.route.routeToSearchdisp();
  
  } 
}
