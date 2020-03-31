import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  createSelectionDimensions,
  createUniqueIdFromDimensions
} from '../../helpers';
import { loadDataSetReportingRates } from '../../store/actions';
import { getReportingRatesVisualizationLayersById } from '../../store/selectors/reporting-rates.selectors';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() currentUser: any;
  @Input() selectedDataSet: string;
  @Input() filterSelections: any;
  dimensions: any;
  reportingRatesVisualizationLayers$: Observable<any>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    if (this.filterSelections) {
      this.dimensions = createSelectionDimensions(
        this.filterSelections,
        this.selectedDataSet['id']
      );
      this.store.dispatch(
        loadDataSetReportingRates({
          dimensions: this.dimensions,
          dataSet: this.selectedDataSet
        })
      );
      this.reportingRatesVisualizationLayers$ = this.store.select(
        getReportingRatesVisualizationLayersById,
        {
          id: createUniqueIdFromDimensions(this.dimensions)
        }
      );
    }
  }
}
