import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OldReportsService {
  loadReportsList(): Observable<any> {
    return this.httpClient.get('reports.json?paging=false&fields=*');
  }

  loadReportContents(reportId): Observable<any> {
    return this.httpClient.get(
      'reports/' + reportId + '.json?paging=false&fields=id,name,*'
    );
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}
