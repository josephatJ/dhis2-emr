import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgUnitDistributionService {
  getOuDistribution(ouDimensions): Observable<any> {
    return this.httpClient.get(
      'orgUnitAnalytics?ou=' +
        ouDimensions.ous.join(';') +
        '&ougs=' +
        ouDimensions.distributionType +
        '&columns=' +
        ouDimensions.distributionType
    );
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}
