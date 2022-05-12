import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { Observable } from "rxjs";
import { AppointmentService } from "./../appointment.service";
import { Router } from '@angular/router';
import { AppointmentDetailsComponent } from './../appointment-details/appointment-details.component';



@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  appointments: Observable<Appointment[]>;
  title :any;

  constructor(private appointmentService: AppointmentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.appointments = this.appointmentService.getAppointmentsList();
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
        this.reloadData();
  }


  
  appointmentDetails(id: number){
    this.router.navigate(['details', id]);
  }

  


}
