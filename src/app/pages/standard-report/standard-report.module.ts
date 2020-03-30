import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { pages } from './pages';
import { ReportComponent } from './pages/report/report.component';
import { RenderCustomReportComponent } from './pages/report/containers/render-custom-report/render-custom-report.component';
import { StandardReportRoutingModule } from './standard-report-routing.module';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';

@NgModule({
  declarations: [...pages, ReportComponent, RenderCustomReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    StandardReportRoutingModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ]
})
export class StandardReportModule {}
