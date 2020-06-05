import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { EmrDashboardRoutingModule } from './emr-dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientsFinderComponent } from './containers/patients-finder/patients-finder.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { RoomsStatusComponent } from './components/rooms-status/rooms-status.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { EncountersComponent } from './components/encounters/encounters.component';
import { PatientProfileComponent } from './containers/patient-profile/patient-profile.component';
import { CustomerProfileDetailsComponent } from './components/customer-profile-details/customer-profile-details.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { VisitsSummaryComponent } from './components/visits-summary/visits-summary.component';
import { RegisterCustomerComponent } from './containers/register-customer/register-customer.component';
import { RenderCustomFormComponent } from './components/render-custom-form/render-custom-form.component';
import { DoctorsRoomsComponent } from './components/doctors-rooms/doctors-rooms.component';

@NgModule({
  declarations: [
    HomeComponent,
    PatientsFinderComponent,
    PatientsListComponent,
    RoomsStatusComponent,
    NewPatientComponent,
    EncountersComponent,
    PatientProfileComponent,
    CustomerProfileDetailsComponent,
    VitalsComponent,
    VisitsSummaryComponent,
    RegisterCustomerComponent,
    RenderCustomFormComponent,
    DoctorsRoomsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmrDashboardRoutingModule,
    SharedModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ]
})
export class EmrDashboardModule {}
