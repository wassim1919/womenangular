import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {


  constructor(private http: HttpClient) { }

  getClaim(id: number): Observable<any> {
    return this.http.get(`http://localhost:8095/claim/getClaimById/${id}`);
  }

  createClaim(claim: Object): Observable<Object> {
    return this.http.post(`http://localhost:8095/claim/addClaim`, claim);
  }



  deleteClaim(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8095/claim/deleteClaim/${id}`, { responseType: 'text' });
  }

  getClaimsList(): Observable<any> {
    return this.http.get(`http://localhost:8095/claim/getAllClaim`);
  }




}
