import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyrouteService } from '../myroute.service';
import { SpringapiService } from '../springapi.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  mailid : FormControl;
  password : FormControl;
  username : FormControl;
  passwordcnf:FormControl;
  ibmtoken : string;
  msg :string;
  constructor(private authservice : SpringapiService ,private routeserve : MyrouteService) {

    this.mailid=new FormControl('',Validators.required);
    this.password=new FormControl('',Validators.required);
    this.username=new FormControl('',Validators.required);
    this.passwordcnf=new FormControl('',Validators.required);
   }

  ngOnInit(): void {
  }

  updateData()
  {
   let data={
    mailid : localStorage.getItem('mailid'),
     password:this.password.value,
     username:this.username.value,
     passwordcnf:this.password.value,
   }

   
   if (this.password == this.passwordcnf){
   this.authservice.updateUser(data).subscribe(
     (res)=>{console.log(res);
    alert("Updated");},
    (err) =>{
      alert("please try again");

 }

   )
   
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
        this.routeserve.routeToupdate();

     }


    ) // subscribe
    } //if
   


   } //method

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