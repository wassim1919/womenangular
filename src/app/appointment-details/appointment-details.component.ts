import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';



@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit {

  id: number;
  appointment: Appointment;

  constructor(private route: ActivatedRoute,private router: Router,
    private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointment = new Appointment();

    this.id = this.route.snapshot.params['id'];
    
    this.appointmentService.getAppointment(this.id)
      .subscribe(data => {
        console.log(data)
        this.appointment = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['appointments']);
  }
  

}
