import { Component, OnInit } from '@angular/core';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-headeraftlogin',
  templateUrl: './headeraftlogin.component.html',
  styleUrls: ['./headeraftlogin.component.css']
})
export class HeaderaftloginComponent implements OnInit {

  flag : boolean =true;
  constructor(private route : MyrouteService) { }

  ngOnInit(): void {
  }


  showlogin()
  {
    this.route.routeToLogin();
  }

  showhome()
  {
    this.route.routeToHome();
  }

  showreg()
  {
    this.route.routeToRegister();
  }

  showcomments()
  {
    this.route.routeToCommentdisp();
  }


  showfav()
  {
    this.route.routeToDashboard();
  }


  showsearch()
{
  localStorage.setItem('tosearch','');
  this.route.routeToSearch();
}

showlogout(){

  localStorage.clear();
  sessionStorage.clear();
  alert("Logged out!");
  this.route.routeToHome();
}

}
