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
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from 'src/app/core/pipes';

@NgModule({
  declarations: [
    HomeComponent,
    ReportsListComponent,
    ReportComponent,
    RenderReportComponent,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    OldStandardReportRoutingModule,
    ...reducers,
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  providers: []
})
export class OldStandardReportsModule {}
