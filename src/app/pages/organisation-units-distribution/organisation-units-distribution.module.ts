import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { OrganisationUnitsDistributionRoutingModule } from './organisation-units-distribution-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, OrganisationUnitsDistributionRoutingModule]
})
export class OrganisationUnitsDistributionModule {}
