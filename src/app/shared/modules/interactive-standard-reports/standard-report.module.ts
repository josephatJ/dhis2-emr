import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { MatSelectModule } from '@angular/material/select';
import { RenderCustomReportComponent } from './components/render-custom-report/render-custom-report.component';
import { InteractiveReportComponent } from './containers/interactive-report/interactive-report.component';

@NgModule({
  declarations: [RenderCustomReportComponent, InteractiveReportComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ],
  exports: [InteractiveReportComponent]
})
export class InteractiveStandardReportsModule {}
