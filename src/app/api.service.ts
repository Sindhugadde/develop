import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://localhost:7087/swagger/index.html';

  constructor(private http: HttpClient) {}

  saveuser(data:any):Observable<any>{
    return this.http.post(this.apiURL,data)
  }
}



