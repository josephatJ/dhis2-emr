import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OldReportsService {
  loadReportsList(reportType): Observable<any> {
    return this.httpClient.get(reportType.url);
  }

  loadReportContents(reportId): Observable<any> {
    return this.httpClient.get(
      'reports/' + reportId + '.json?paging=false&fields=id,name,*'
    );
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}
