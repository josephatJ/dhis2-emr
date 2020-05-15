import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/middle-menu/middle-menu.module').then(
        m => m.MiddleMenuModule
      )
  },
  {
    path: 'standard-reports',
    loadChildren: () =>
      import('./pages/standard-reports/standard-reports.module').then(
        m => m.StandardReportsModule
      )
  },
  {
    path: 'i-standard-reports',
    loadChildren: () =>
      import('./pages/i-standard-report/standard-report.module').then(
        m => m.IStandardReportModule
      )
  },
  {
    path: 'datasets-reports',
    loadChildren: () =>
      import('./pages/data-set-reports/data-set-reports.module').then(
        m => m.DataSetReportsModule
      )
  },
  {
    path: 'reporting-rates',
    loadChildren: () =>
      import(
        './pages/reporting-rates-summary/reporting-rates-summary.module'
      ).then(m => m.ReportingRatesSummaryModule)
  },
  {
    path: 'organisation-units-distribution',
    loadChildren: () =>
      import(
        './pages/organisation-units-distribution/organisation-units-distribution.module'
      ).then(m => m.OrganisationUnitsDistributionModule)
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./pages/resources/resources.module').then(m => m.ResourcesModule)
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
