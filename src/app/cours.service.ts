import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private baseUrl = 'http://localhost:8080/cours';

  constructor(private http:HttpClient) { }


  getCoursesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  createCours(cours:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/add/`, cours);
  }

  deleteCours(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/?cours_id=${id}`, { responseType: 'text' });
  }
  updateCours(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit?cours_id=${id}`, value);
  }
  getCours(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/?cours_id=${id}`);
  }
  confirmCours(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/confirm/?cours_id=${id}`, { responseType: 'text' });
  }
}
