import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSetsService {
  getDataSets(): Observable<any> {
    return this.httpClient.get('dataSets.json?fields=id,name');
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}
