import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReportsService } from '../../services/reports.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import {
  getReportListState,
  getCurrentReportState
} from '../../store/selectors';
import {
  updateSelection,
  setCurrentReport,
  getReports
} from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageEvent: any;
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
  selectedOrgUnitItems: Array<any> = [];

  reportsList$: Observable<Array<any>>;
  reportSelected$: Observable<String>;
  htmlTemplate: string;

  constructor(
    private reportService: ReportsService,
    private store: Store<any>,
    private router: Router
  ) {
    this.store.dispatch(getReports());
  }

  ngOnInit() {
    this.reportsList$ = this.store.select(getReportListState);

    this.store.select(getCurrentReportState).subscribe((currentReport: any) => {
      this.reportSelected$ = currentReport;
    });
  }

  onFilterUpdateAction(filterSelections) {
    //fire action to store selection only is selectionsArray.length > 2
    if (filterSelections.length == 2) {
      console.log(filterSelections);

      let peIndex = _.findIndex(filterSelections, filterSelection => {
        return filterSelection.dimension == 'pe' ? true : false;
      });
      let ouIndex = _.findIndex(filterSelections, filterSelection => {
        return filterSelection.dimension == 'ou' ? true : false;
      });
      this.store.dispatch(
        updateSelection({
          Selection: {
            orgUnit: filterSelections[ouIndex].items[0].id,
            period: filterSelections[peIndex].items[0].id
          }
        })
      );
    }
  }

  selectReport(report) {
    console.log(report);

    this.store.dispatch(
      setCurrentReport({
        CurrentReport: report
      })
    );
  }

  getReportTemplate() {
    this.router.navigate(['/standard-reports', this.reportSelected$]);
  }
}
