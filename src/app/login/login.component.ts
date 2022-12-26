import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { SpringapiService } from '../springapi.service';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mailid : FormControl;
  password : FormControl;
  ibmtoken : string;
  msg :string;
  constructor(private authservice : SpringapiService ,private routeserve : MyrouteService) {

    this.mailid=new FormControl('',Validators.required);
    this.password=new FormControl('',Validators.required);
   }

  ngOnInit(): void {
  }

  loginData()
  {
   let data={
    mailid : this.mailid.value,
     password:this.password.value
   }

   if (this.mailid.valid)
   {
    this.authservice.authenticateUser(data).subscribe
    (
     (res)=>{
        this.ibmtoken=res['mytoken'];
        this.authservice.setbearerToken(this.ibmtoken);
        localStorage.setItem('isAuth','true');
        localStorage.setItem('mailid',this.mailid.value);
        this.routeserve.routeToHome();
        console.log(this.ibmtoken);
     },
     (err) =>{
          if(err.status==403)
        this.msg=err.message;

     }


    ) // subscribe
    } //if



   } //method

   RegisterData()
   {
     this.routeserve.routeToRegister()
   }
  

 checkUsername() : string
 {
   if(this.mailid.touched && this.mailid.invalid)
   {
   //  if (this.username.hasError('required'))
     return "Name cant be Null";
     //else
     //return "";
   }
   else
   return "";
 }
}
