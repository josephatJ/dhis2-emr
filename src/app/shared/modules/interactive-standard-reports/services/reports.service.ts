import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getReports(): Observable<any> {
    return this.http.get('dataStore/report-templates');
  }

  getReportTemplate(reportId: string): Observable<any> {
    return this.http.get('dataStore/report-templates/' + reportId);
  }

  fetchDataByAnalytics(
    dataid: string,
    //datatype: string,
    orgUnit: Observable<string>,
    period: Observable<string>,
    filterSelections: any[]
  ) {
    console.log('id:', dataid, ' & period:', period, ' & orgUnit:', orgUnit);

    const pe = _.filter(filterSelections, { dimension: 'pe' })[0]
      ['items'].map(function(item) {
        return item.id;
      })
      .join(';');
    const ou = _.filter(filterSelections, { dimension: 'ou' })[0]
      ['items'].map(function(item) {
        return item.id;
      })
      .join(';');

    return this.http.get(
      'analytics?dimension=dx:' +
        dataid +
        '&dimension=pe:' +
        pe +
        '&filter=ou:' +
        ou
    );
  }

  fetchFavourite(favoriteId: string, favoriteType: string) {
    return this.http.get(favoriteType + '/' + favoriteId);
  }
}
