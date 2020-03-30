import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';

@Injectable({
  providedIn: 'root'
})
export class ReportingRatesService {
  getReportingRates(dimensions): Observable<any> {
    return this.httpClient.get(
      'analytics.json?dimension=dx:' +
        dimensions.dx +
        '.ACTUAL_REPORTS;' +
        dimensions.dx +
        '.EXPECTED_REPORTS;' +
        dimensions.dx +
        '.REPORTING_RATE;' +
        dimensions.dx +
        '.ACTUAL_REPORTS_ON_TIME;' +
        dimensions.dx +
        '.REPORTING_RATE_ON_TIME&dimension=ou:' +
        dimensions.ou +
        ';LEVEL-' +
        dimensions.level +
        ';LEVEL-' +
        (dimensions.level - 1) +
        '&columns=dx&rows=ou&tableLayout=true&hideEmptyRows=true&displayProperty=SHORTNAME&includeNumDen=false&filter=pe:' +
        dimensions.pe
    );
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}
