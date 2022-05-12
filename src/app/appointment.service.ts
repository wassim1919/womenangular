import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  

  constructor(private http: HttpClient) { }

  getAppointment(id: number): Observable<any> {
    return this.http.get(`http://localhost:8095/appointment/getAppointmentById/${id}`);
  }

  createAppointment(appointment: Object): Observable<Object> {
    return this.http.post(`http://localhost:8095/appointment/addAppointment`, appointment);
  }



  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8095/appointment/deleteAppointment/${id}`, { responseType: 'text' });
  }

  getAppointmentsList(): Observable<any> {
    return this.http.get(`http://localhost:8095/appointment/getAllAppointment`);
  }


   
  }

