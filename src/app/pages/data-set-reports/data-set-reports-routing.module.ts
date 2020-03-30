import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DataSetReportComponent } from './pages/data-set-report/data-set-report.component';

const routes: Routes = [
  {
    path: '',
    component: DataSetReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSetReportsRoutingModule {}
