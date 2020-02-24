import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { getElementDetails } from 'src/app/core/helpers/htmlHelpers';
import {
  fetchFavourite,
  fetchFunctionsData,
  renderAnalyticsData
} from 'src/app/core/helpers/reportHelpers';
import { Store } from '@ngrx/store';
import { getOrgUnitState, getPeriodState } from 'src/app/store/selectors';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-render-custom-report',
  templateUrl: './render-custom-report.component.html',
  styleUrls: ['./render-custom-report.component.css']
})
export class RenderCustomReportComponent implements OnInit {
  @Input() htmlCodes: any;

  htmlCodes_: SafeHtml;
  arrayForAnalytics: Array<{}>;
  orgUnit$: Observable<string>;
  period$: Observable<string>;

  constructor(
    private store: Store<any>,
    private sanitizer: DomSanitizer,
    private reportsService: ReportsService
  ) {}

  ngOnInit() {
    try {
      this.htmlCodes_ = this.sanitizer.bypassSecurityTrustHtml(this.htmlCodes);
    } catch (e) {
      console.log('ng on init ' + JSON.stringify(e));
    }

    this.store.select(getOrgUnitState).subscribe(orgunit => {
      this.orgUnit$ = orgunit;
    });

    this.store.select(getPeriodState).subscribe(period => {
      this.period$ = period;
    });
  }

  ngAfterViewInit() {
    try {
      this.arrayForAnalytics = getElementDetails();

      if (this.arrayForAnalytics) {
        this.fetchDataBasedOnConfigs(this.arrayForAnalytics);
      }
    } catch (e) {}
  }

  fetchDataBasedOnConfigs(arrayForAnalytics: Array<{}>) {
    _.each(arrayForAnalytics, (dataToFetch: {}) => {
      if (dataToFetch['category'] == 'defaultMetadata') {
        //fetch analytics data
        this.reportsService
          .fetchDataByAnalytics(
            dataToFetch['id'],
            dataToFetch['type'],
            this.orgUnit$,
            this.period$
          )
          .subscribe(data => {
            console.log('datareceived :: ', data);
            renderAnalyticsData(dataToFetch['id'], data.rows[0][2]);
          });
      } else if (dataToFetch['category'] == 'favorites') {
        //fetch favourites data
        fetchFavourite(
          dataToFetch['id'],
          dataToFetch['type'],
          this.orgUnit$,
          this.period$
        );
      } else if (dataToFetch['category'] == 'functions') {
        //handle data fetched from functions
        fetchFunctionsData();
      }
    });
  }
}
