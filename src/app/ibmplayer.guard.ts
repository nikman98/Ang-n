import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { MyrouteService } from './myroute.service';
import { SpringapiService } from './springapi.service';

@Injectable({
  providedIn: 'root'
})
export class IbmplayerGuard implements CanActivate {

  constructor(private authservice : SpringapiService, private route : MyrouteService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    
    {

let token = this.authservice.getbearerToken();
if(token == null)
{
  this.route.routeToLogin();
  return false;
}
  
return true;
    }
    
  }
// let token=this.authservice.getbearerToken();

// const boolresult=this.authservice.istokenAuthorized(token);

// return boolresult.then
// (
//   (res)=>
//   {
//         if(!res)
//         {
//         this.route.routeToLogin();
//         }
//         return res;
//   }

// )
// .catch
// (
//     (err)=>
//       {
//         this.route.routeToLogin();
//         return false;
//       }
// )
// //let token=sessionStorage.getItem("mytoken");
   
// //return true;
//   }
  
// }
