import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';




const routes: Routes = [
  { path: '', redirectTo: 'appointment', pathMatch: 'full' },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'add', component: CreateAppointmentComponent },
  { path: 'details/:id', component: AppointmentDetailsComponent },

  { path: '', redirectTo: 'claim', pathMatch: 'full' },
  { path: 'claims', component: ClaimListComponent },
  { path: 'addc', component: CreateClaimComponent },
  { path: 'detailsc/:id', component: ClaimDetailsComponent },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
    exports: [RouterModule]
  ,
})
export class AppRoutingModule { }
