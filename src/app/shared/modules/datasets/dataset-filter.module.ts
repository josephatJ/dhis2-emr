import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatasetFilterComponent } from './dataset-filter/dataset-filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { StringFilterByPipe } from './pipes/string-filter-by.pipe';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [DatasetFilterComponent, StringFilterByPipe],
  exports: [DatasetFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatSelectModule
  ]
})
export class DatasetFilterModule {}
