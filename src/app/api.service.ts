import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://localhost:7087/swagger/v1/swagger.json';

  constructor(private httpClient: HttpClient) {}
}