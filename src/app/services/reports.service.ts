import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getReports() {
    return this.http.get('dataStore/report-templates');
  }

  getReportTemplate(reportId: string): Observable<any> {
    return this.http.get('dataStore/report-templates/' + reportId);
  }

  fetchDataByAnalytics(
    dataid: string,
    datatype: string,
    orgUnit: Observable<string>,
    period: Observable<string>
  ) {
    return this.http.get(
      'analytics?dimension=dx:' +
        dataid +
        '&dimension=pe:' +
        period +
        '&filter=ou:' +
        orgUnit
    );
  }
}
