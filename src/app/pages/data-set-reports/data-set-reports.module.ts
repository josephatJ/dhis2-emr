import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSetReportComponent } from './pages/data-set-report/data-set-report.component';
import { RenderDataSetReportComponent } from './components/render-data-set-report/render-data-set-report.component';
import { DataSetReportsRoutingModule } from './data-set-reports-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ReportComponent } from './components/report/report.component';
import { dataSetEffects } from './store/effects';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DataSetReportComponent,
    RenderDataSetReportComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataSetReportsRoutingModule,
    HttpClientModule,
    ...reducers,
    EffectsModule.forFeature(dataSetEffects)
  ]
})
export class DataSetReportsModule {}
