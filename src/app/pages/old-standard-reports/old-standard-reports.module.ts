import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { OldStandardReportRoutingModule } from './old-standard-reports-routing.module';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { ReportComponent } from './components/report/report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RenderReportComponent } from './components/render-report/render-report.component';

@NgModule({
  declarations: [HomeComponent, ReportsListComponent, ReportComponent, RenderReportComponent],
  imports: [
    CommonModule,
    OldStandardReportRoutingModule,
    ...reducers,
    EffectsModule.forFeature(effects),
    SharedModule
  ]
})
export class OldStandardReportsModule {}
