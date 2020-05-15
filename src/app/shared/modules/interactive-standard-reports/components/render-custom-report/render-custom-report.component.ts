import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { ReportsService } from '../../services/reports.service';
import { getOrgUnitState, getPeriodState } from '../../store/selectors';
import { getElementDetails } from 'src/app/core/helpers/htmlHelpers';
import {
  renderAnalyticsData,
  getFavouriteDataDimensions,
  processTable,
  processConfigs,
  renderFavorite,
  fetchFunctionsData
} from 'src/app/core/helpers/reportHelpers';

@Component({
  selector: 'app-render-custom-report',
  templateUrl: './render-custom-report.component.html',
  styleUrls: ['./render-custom-report.component.css']
})
export class RenderCustomReportComponent implements OnInit {
  @Input() htmlCodes: any;
  @Input() filterSelections: any;

  htmlCodes_: SafeHtml;
  arrayForAnalytics: Array<{}>;
  orgUnit$: Observable<string>;
  period$: Observable<string>;

  favId: string;
  constructor(
    private store: Store<any>,
    private sanitizer: DomSanitizer,
    private reportsService: ReportsService
  ) {}

  ngOnInit() {
    try {
      console.log(this.htmlCodes);
      this.htmlCodes_ = this.sanitizer.bypassSecurityTrustHtml(this.htmlCodes);
    } catch (e) {
      console.log('ng on init ' + JSON.stringify(e));
    }

    this.store.select(getOrgUnitState).subscribe((orgunit: any) => {
      this.orgUnit$ = orgunit;
    });

    this.store.select(getPeriodState).subscribe((period: any) => {
      this.period$ = period;
    });

    //console.log(this.orgUnit$, '-------------------', this.period$);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        this.arrayForAnalytics = getElementDetails();

        if (this.arrayForAnalytics) {
          this.fetchDataBasedOnConfigs(
            this.arrayForAnalytics,
            this.filterSelections
          );
        }
      } catch (e) {
        console.log('error on set timeout :: ', e);
      }
    }, 1000);
  }

  fetchDataBasedOnConfigs(
    arrayForAnalytics: Array<{}>,
    filterSelections: any[]
  ) {
    _.each(arrayForAnalytics, (dataToFetch: {}) => {
      if (dataToFetch['category'] == 'defaultMetadata') {
        //  fetch analytics data
        this.reportsService
          .fetchDataByAnalytics(
            dataToFetch['id'],
            // tslint:disable-next-line: comment-format
            //dataToFetch['type'],
            this.orgUnit$,
            this.period$,
            filterSelections
          )
          .subscribe(data => {
            console.log('datareceived :: ', data);
            renderAnalyticsData(dataToFetch['id'], data.rows[0][2]);
          });
      } else if (dataToFetch['category'] == 'favorites') {
        //  fetch favourites data

        this.reportsService
          .fetchFavourite(dataToFetch['id'], dataToFetch['type'])
          .subscribe(favouriteConfigs => {
            let favouriteDataDimensions = getFavouriteDataDimensions(
              favouriteConfigs
            );

            this.reportsService
              .fetchDataByAnalytics(
                favouriteDataDimensions,
                this.orgUnit$,
                this.period$,
                filterSelections
              )
              .subscribe(data => {
                this.favId = dataToFetch['id'];

                console.log('unformatted data ::: ', data);

                let options;
                if (dataToFetch['type'] == 'reportTables') {
                  options = processTable(data, favouriteConfigs);
                } else {
                  options = processConfigs(favouriteConfigs, data);
                }

                renderFavorite(dataToFetch['id'], options);
              });

            // prepareAnalyticsUrl(favouriteConfigs);
          });
      } else if (dataToFetch['category'] == 'functions') {
        //  handle data fetched from functions
        fetchFunctionsData();
      }
    });
  }
}
