import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportingRatesSummaryComponent } from './pages/reporting-rates-summary/reporting-rates-summary.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingRatesSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRatesRoutingModule {}
