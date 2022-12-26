import { Component, OnInit } from '@angular/core';
import { MyrouteService } from '../myroute.service';
import {LoginservService} from '../loginserv.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag : boolean =true;
  constructor(private route : MyrouteService, public login:LoginservService) { }

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

showupdate()
{
  this.route.routeToupdate();
}

showlogout(){

  localStorage.clear();
  sessionStorage.clear();
  alert("Logged out!");
  this.route.routeToHome();
}

}
