import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatasetFilterComponent } from './dataset-filter/dataset-filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [DatasetFilterComponent],
  exports: [DatasetFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class DatasetFilterModule {}
