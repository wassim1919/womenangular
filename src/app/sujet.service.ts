
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private baseUrl = 'http://localhost:8080/sujet';

  constructor(private http:HttpClient) { }


  getSujetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

}
