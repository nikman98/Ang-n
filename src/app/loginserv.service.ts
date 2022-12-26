import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  constructor() { }
  isLogin(): boolean{
    if (localStorage.getItem('isAuth')=== 'true')
    return true;
  return false;
  }

  isLogout(): void{
    localStorage.removeItem('isAuth');
  }
}
