import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleMenuComponent } from './containers/middle-menu/middle-menu.component';
import { MiddleMenuRoutingModule } from './middle-menu-routing.module';

@NgModule({
  declarations: [MiddleMenuComponent],
  imports: [CommonModule, MiddleMenuRoutingModule]
})
export class MiddleMenuModule {}
