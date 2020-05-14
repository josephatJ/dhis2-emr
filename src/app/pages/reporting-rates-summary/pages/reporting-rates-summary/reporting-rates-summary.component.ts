import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable, Subject } from 'rxjs';
import { getCurrentUser } from 'src/app/store/selectors';
import { loadDataSets, loadOuWithChildren } from '../../store/actions';
import {
  getLoadedDataSets,
  getOuWithChildrenById
} from '../../store/selectors';
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
  selectionChanged: boolean = false;
  dataSetDimensions$: Observable<any>;
  selectedDataSet: any;
  ouWithChildren$: Observable<any>;
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

  onDataSetSelectionChanged(dataSet) {
    this.dataSetId = dataSet.id;
    this.selectionChanged = false;
    setTimeout(() => {
      this.selectedDataSet = dataSet;
      this.selectionChanged = true;
    }, 10);
  }

  getDataSetDimension(dimensionId) {
    console.log('dimension', dimensionId);
  }

  onFilterUpdate(selections) {
    this.selectionChanged = false;
    setTimeout(() => {
      this.selectionChanged = true;
    }, 10);
    this.filterSelections = selections;
    const ouId = _.filter(selections, { dimension: 'ou' })[0]
      ? _.filter(selections, { dimension: 'ou' })[0]['items'][0]['id']
      : null;
    if (ouId) {
      this.store.dispatch(loadOuWithChildren({ ouId }));
      this.ouWithChildren$ = this.store.select(getOuWithChildrenById, {
        id: ouId
      });
    }
  }
}
