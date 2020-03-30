import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'standard-reports',
    loadChildren: () =>
      import('./pages/standard-report/standard-report.module').then(
        m => m.StandardReportModule
      )
  },
  {
    path: 'datasets-reports',
    loadChildren: () =>
      import('./pages/data-set-reports/data-set-reports.module').then(
        m => m.DataSetReportsModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
