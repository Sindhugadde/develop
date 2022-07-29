import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import validator and FormBuilder
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import {ApiService} from './api.service';
import { Observable, throwError} from 'rxjs';


@Component({
   selector: 'app',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   //Create FormGroup
   requiredForm!: FormGroup ;
   constructor(private fb: FormBuilder,private router: Router,private apiservice : ApiService) {
      this.myForm();
   }
   
//Create required field validator 
myForm() {
  this.requiredForm = this.fb.group({
    firstname: ['', Validators.required ],
    lastname:['', Validators.required ],
    telephone: ['',[Validators.required,Validators.minLength(10)]],
    email:['', [Validators.required, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
  });
}
ngOnInit()
{

}
onSubmit(data:any) { // to get the form value in component
    //this.goToPage;
    console.warn(data);

   this.apiservice.saveuser(data).subscribe((result)=>
   console.warn(result)

  ) }
    

goToPage(pageName:string):void{
   this.router.navigate([`${pageName}`])
}

}


 

