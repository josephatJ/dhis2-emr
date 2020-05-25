import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  constructor(private httpClient: NgxDhis2HttpClientService) {}

  loadEventsByProgramStage(dimension): Observable<any> {
    return this.httpClient.get(
      'events/query.json?orgUnit=' +
        dimension.ou +
        '&programStage=' +
        dimension.stage +
        '&order=lastUpdated:desc&paging=false'
    );
  }

  saveTrackedEntityInstances(data): Observable<any> {
    return this.httpClient.post('trackedEntityInstances', data);
  }

  saveEnrollments(data): Observable<any> {
    return this.httpClient.post('enrollments', data);
  }

  getTrackedEntityInstancesList(dimension): Observable<any> {
    return this.httpClient.get(
      'trackedEntityInstances.json?ou=' +
        dimension.ou +
        '&program=' +
        dimension.program
    );
  }

  getTrackedEntityInstancesInfo(dimension): Observable<any> {
    return this.httpClient.get(
      'trackedEntityInstances/' +
        dimension.tei +
        '.json?program=' +
        dimension.program +
        '&fields=*'
    );
  }

  getTrackedEntityAttributes(): Observable<any> {
    return this.httpClient.get(
      'trackedEntityAttributes.json?fields=id,name,code,valueType'
    );
  }

  getUID(): Observable<any> {
    return this.httpClient.get('system/id.json?limit=2');
  }

  saveEventsById(event, dataElement, data): Observable<any> {
    return this.httpClient.put('events/' + event + '/' + dataElement, data);
  }

  saveEvents(data): Observable<any> {
    return this.httpClient.post('events', data);
  }

  saveCustomer(data): Observable<any> {
    this.httpClient.post('schemas/organisationUnit', data);
    return this.httpClient.post('organisationUnits', data);
  }
}
