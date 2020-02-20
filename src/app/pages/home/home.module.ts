import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { pages } from './pages';
import { ReportComponent } from './pages/report/report.component';
import { RenderCustomReportComponent } from './pages/report/containers/render-custom-report/render-custom-report.component';

@NgModule({
  declarations: [...pages, ReportComponent, RenderCustomReportComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
