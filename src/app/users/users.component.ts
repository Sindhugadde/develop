import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
type users = Array<{ FirstName: string; LastName: string ;Telephone:String;Email:String}>;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  headers=["firstname","lastname","telephone","email"];
  constructor( private service:ApiService) {}

  UsersList:any;
  
  ngOnInit(): void {
    this.refreshUserList();
  }
refreshUserList(){
  this.service.getusers().subscribe(data=>{
   
    this.UsersList=data;
   
    
  });
}

}

