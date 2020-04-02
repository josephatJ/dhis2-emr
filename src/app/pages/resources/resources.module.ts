import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesRoutingModule } from './resources-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ResourcesRoutingModule]
})
export class ResourcesModule {}
