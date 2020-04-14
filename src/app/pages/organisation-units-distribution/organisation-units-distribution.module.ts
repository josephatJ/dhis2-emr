import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { OrganisationUnitsDistributionRoutingModule } from './organisation-units-distribution-routing.module';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportComponent } from './components/report/report.component';
import { VisualizationComponent } from './components/visualization/visualization.component';

@NgModule({
  declarations: [HomeComponent, ReportComponent, VisualizationComponent],
  imports: [
    CommonModule,
    OrganisationUnitsDistributionRoutingModule,
    SharedModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ]
})
export class OrganisationUnitsDistributionModule {}
