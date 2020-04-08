import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { OldStandardReportRoutingModule } from './old-standard-reports-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, OldStandardReportRoutingModule]
})
export class OldStandardReportsModule {}
