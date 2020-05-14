import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'ngx-dataset-filter',
  templateUrl: './dataset-filter.component.html',
  styleUrls: ['./dataset-filter.component.css']
})
export class DatasetFilterComponent implements OnInit {
  @Input() dataSets: any[];
  @Output() selectedDataSet = new EventEmitter<any>();
  dataSetFormControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.dataSetFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onDataSetSelectionChanged(dataset) {
    this.selectedDataSet.emit(dataset);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.dataSets.filter(
      option => option.name.toLowerCase().indexOf(filterValue) > -1
    );
  }
}
