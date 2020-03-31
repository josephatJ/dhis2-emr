import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingRatesSummaryComponent } from './pages/reporting-rates-summary/reporting-rates-summary.component';
import { ReportingRatesRoutingModule } from './reporting-rates-summary-routing.module';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './components/report/report.component';
import { RenderReportingRatesComponent } from './components/render-reporting-rates/render-reporting-rates.component';

@NgModule({
  declarations: [ReportingRatesSummaryComponent, ReportComponent, RenderReportingRatesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReportingRatesRoutingModule,
    SharedModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ]
})
export class ReportingRatesSummaryModule {}
