import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CreateAppointmentComponent,
    AppointmentDetailsComponent,
    AppointmentListComponent,
    CreateClaimComponent,
    ClaimListComponent,
    ClaimDetailsComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
