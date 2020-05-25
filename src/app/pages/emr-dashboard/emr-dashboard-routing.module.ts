import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { PatientProfileComponent } from './containers/patient-profile/patient-profile.component';
import { PatientsFinderComponent } from './containers/patients-finder/patients-finder.component';
import { RegisterCustomerComponent } from './containers/register-customer/register-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: PatientsFinderComponent
      },
      {
        path: ':id',
        component: PatientProfileComponent,
        pathMatch: 'full'
      },
      {
        path: 'new/register',
        component: RegisterCustomerComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmrDashboardRoutingModule {}
