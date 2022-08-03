import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { ApiService } from '../api.service';
import { Observable, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
   selector: 'app-webform',
   templateUrl: './webform.component.html',
   styleUrls: ['./webform.component.css']
})

export class WebFormComponent  {
   //Create FormGroup
   
   constructor(private http:HttpClient,private apiservice : ApiService) {
      
   }
   

 onSubmit(data:any) 
 {  
    this.apiservice.saveusers(data).subscribe((result)=>
   console.warn(result)
   )}
    

}


 

