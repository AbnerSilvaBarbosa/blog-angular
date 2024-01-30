import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string = '';

  constructor(private readonly http: HttpClient) {
    this.baseURL = environment.apiURL;
  }

  getApi(name: string) {
    this.http.get(this.baseURL);
    this.http.post(this.baseURL, { name: name });
  }
}
