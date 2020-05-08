import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesListComponent } from './containers/resources-list/resources-list.component';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilterByInputTextPipe } from './pipes';
import { ListingTableComponent } from './components/listing-table/listing-table.component';

@NgModule({
  declarations: [HomeComponent, ResourcesListComponent, FilterByInputTextPipe, ListingTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ResourcesRoutingModule,
    SharedModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ]
})
export class ResourcesModule {}
