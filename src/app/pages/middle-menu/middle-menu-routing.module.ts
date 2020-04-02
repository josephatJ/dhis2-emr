import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MiddleMenuComponent } from './containers/middle-menu/middle-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MiddleMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiddleMenuRoutingModule {}
