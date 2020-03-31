import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable, Subject } from 'rxjs';
import { getCurrentUser } from 'src/app/store/selectors';
import { loadDataSetDimensions, loadDataSets } from '../../store/actions';
import { getLoadedDataSets } from '../../store/selectors';
import { getDataSetDimensionsByDataSetId } from '../../store/selectors/datasets-dimensions.selectors';
import * as _ from 'lodash';

@Component({
  selector: 'app-reporting-rates-summary',
  templateUrl: './reporting-rates-summary.component.html',
  styleUrls: ['./reporting-rates-summary.component.css']
})
export class ReportingRatesSummaryComponent implements OnInit {
  selectionFilterConfig: any = {
    showDataFilter: false,
    showPeriodFilter: true,
    showOrgUnitFilter: true,
    showLayout: false,
    showFilterButton: false,
    orgUnitFilterConfig: {
      singleSelection: true,
      showUserOrgUnitSection: false,
      showOrgUnitLevelGroupSection: false,
      showOrgUnitGroupSection: false,
      showOrgUnitLevelSection: false,
      reportUse: false,
      additionalQueryFields: [],
      batchSize: 400
    }
  };
  currentUser$: Observable<any>;
  dataSets$: Observable<any>;
  dataSetId: string;
  isReportSet: boolean = false;
  report: any;
  filterSelections: Array<any> = [];
  selectionChanged$: Subject<any> = new Subject();
  selectionChanged: boolean = false;
  dataSetDimensions$: Observable<any>;
  selectedDataSet: any;
  constructor(private store: Store<State>) {
    this.currentUser$ = this.store.select(getCurrentUser);
    this.currentUser$.subscribe(currentUser => {
      if (currentUser) {
        this.store.dispatch(loadDataSets({ currentUser }));
      }
    });
  }

  ngOnInit(): void {
    this.dataSets$ = this.store.select(getLoadedDataSets);
  }

  getDataSet(dataSetId) {
    this.dataSetId = dataSetId;
    this.store.dispatch(loadDataSetDimensions({ dataSetId }));
    this.dataSetDimensions$ = this.store.select(
      getDataSetDimensionsByDataSetId,
      { id: dataSetId }
    );
    this.dataSets$.subscribe(dataSets => {
      if (dataSets) {
        this.selectedDataSet = _.filter(dataSets, { id: dataSetId })[0];
      }
    });
  }

  getDataSetDimension(dimensionId) {
    console.log('dimension', dimensionId);
  }

  onFilterUpdate(selections) {
    console.log(this.dataSetId);
    this.selectionChanged = false;
    setTimeout(() => {
      this.selectionChanged = true;
      this.selectionChanged$.next({
        changed: true
      });
    }, 1000);
    this.filterSelections = selections;
    console.log('selections', selections);
  }
}
