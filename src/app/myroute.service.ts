import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class MyrouteService {

  constructor(private router : Router,private loca : Location) { }

  routeToDashboard()
  {
    this.router.navigate(['dashboard']);
  }

  routeToFavnews()
  {
    this.router.navigate(['favnews']);
  }

  routeToLogin()
  {
    this.router.navigate(['login']);
  }

  routeToSearch()
  {
    this.router.navigate(['srch']);
  }

  routeToSearchdisp()
  {
    this.router.navigate(['srchdisp']);
  }

  routeToComment()
  {
    this.router.navigate(['cmt']);
  }

  routeToupdate()
  {
    this.router.navigate(['updatePG']);
  }

  routeToCommentdisp()
  {
    this.router.navigate(['cmtdisp']);
  }

  routeToRegister()
  {
    this.router.navigate(['register']);
  }

  routeToHome()
  {
    this.router.navigate(['home']);
  }

  routeToListview()
  {
    this.router.navigate(['dashboard/listview']);
  }
  routeToGridview()
  {
    this.router.navigate(['dashboard/gridview']);
  }

  routeToEditOpener(playerid)
  {
    this.router.navigate(['dashboard', 
    {outlets:{playerEditoutlet:['player',playerid,'edit']}    }])
  }
   
  routeback()
  {
  this.loca.back();
  }
}
