import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email=""
  password=""
  constructor(private myrouter:Router,private myapi:ApiService) { }

  

  readValue=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.addLogin(data).subscribe(
      (res:any)=>{
        if (res.length>0){
          localStorage.setItem("stored-name",res[0].name)
          localStorage.setItem("id",res[0].id)
          this.myrouter.navigate(["/todo"])
        } else {
          alert("Invalid Credentials")
        }
      }
    )
    this.email=""
    this.password=""
    
  }

  ngOnInit(): void {
  }

}
