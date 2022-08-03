import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiURL = 'http://localhost:7007/api';

  
  constructor(private http: HttpClient) {}
  
  saveusers(val:any){
    return this.http.post(this.apiURL+'/Users/AddUser', val)
  }

  getusers():Observable<any[]>{
    
    return this.http.get<any>(this.apiURL+'/Users')
  
    
  }
}



