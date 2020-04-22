import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadDataSets, loadDataSetReport } from '../../store/actions';
import {
  createSelectionDimensions,
  createUniqueIdFromDimensions
} from '../../helpers';
import { Observable } from 'rxjs';
import { getDataSetReportById } from '../../store/selectors/dataset-report.selectors';
import * as _ from 'lodash';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() currentUser: any;
  @Input() dataSetId: string;
  @Input() filterSelections: any;
  @Input() filterDimension: string;
  dimensions: any;
  dataSetReport$: Observable<any>;
  @Input() dataSets: any;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    if (this.filterSelections) {
      this.dimensions = createSelectionDimensions(
        this.filterSelections,
        this.dataSetId,
        _.filter(this.dataSets, { id: this.dataSetId })[0],
        this.filterDimension
      );
      this.store.dispatch(
        loadDataSetReport({
          dimensions: this.dimensions
        })
      );
      this.dataSetReport$ = this.store.select(getDataSetReportById, {
        id: createUniqueIdFromDimensions(this.dimensions)
      });
    }
  }
}
