import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  updateSelection,
  loadedReports,
  setCurrentReport
} from 'src/app/store/actions';
import { ReportsService } from '../../../../services/reports.service';
import { Observable } from 'rxjs';
import {
  getReportListState,
  getCurrentReportState
} from 'src/app/store/selectors';
import { async } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageEvent: any;
  selectionFilterConfig = {
    showDataFilter: false,
    disableDataFilter: true,
    showValidationRuleGroupFilter: false,
    disableValidationRuleGroupFilter: true
  };

  reportsList$: Observable<Array<any>>;
  reportSelected$: Observable<String>;

  dataSelections = [];

  constructor(
    private reportService: ReportsService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.select(getReportListState).subscribe(reportList => {
      this.reportsList$ = reportList;
    });

    this.store.select(getCurrentReportState).subscribe(report => {
      this.reportSelected$ = report;
    });

    //on init outsource reports service to fetch reports names and push to store
    this.reportService.getReports().subscribe(
      reports => {
        //fire action to store in reports list on store
        this.store.dispatch(
          loadedReports({
            Reports: reports
          })
        );
      },
      error => {
        //handle this error
      }
    );
  }

  onFilterUpdateAction(filterSelections) {
    //fire action to store selection only is selectionsArray.length > 2
    if (filterSelections.length == 2) {
      this.store.dispatch(
        updateSelection({
          Selection: {
            orgUnit: filterSelections[1].items[0].id,
            period: filterSelections[0].items[0].id
          }
        })
      );
    }
  }

  selectReport(report) {
    //console.log(report);
    this.store.dispatch(
      setCurrentReport({
        CurrentReport: report
      })
    );
  }

  getReportTemplate() {
    //console.log(this.reportSelected$)
    this.reportService
      .getReportTemplate(this.reportSelected$)
      .subscribe(reportTemplate => {
        console.log(reportTemplate);
      });
  }
}
