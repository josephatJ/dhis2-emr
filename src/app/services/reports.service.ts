import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { async } from 'q';
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
}
