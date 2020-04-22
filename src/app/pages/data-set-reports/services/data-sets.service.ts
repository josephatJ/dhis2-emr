import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSetsService {
  getDataSets(): Observable<any> {
    return this.httpClient.get(
      'dataSets.json?paging=false&fields=id,name,periodType,formType,categoryCombo[id,name,categoryOptionCombos[id,name]],sections[*],attributeValues[*]'
    );
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}
