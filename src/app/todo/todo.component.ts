import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  name=localStorage.getItem("stored_name")
  post=""
  

  readValue=()=>{
    let data={
      "user_id":localStorage.getItem("id"),
      "post":this.post
    }
    console.log(data)
    this.myapi.addPosts(data).subscribe(
      (res)=>{
        alert("added post")
      }
    )
    this.fetchData()
    this.post=""
  }

  fetchData=()=>{
    let data={
      "user_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myapi.viewSingle(data).subscribe(
      (res)=>{
        this.todoD=res
      }
    )
  }

  todoD:any=[]
  ngOnInit(): void {
  }

}
