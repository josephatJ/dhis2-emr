import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgUnitsService {
  constructor(private httpClient: NgxDhis2HttpClientService) {}

  loadOuChidren(id): Observable<any> {
    return this.httpClient.get(
      'organisationUnits/' + id + '.json?fields=id,name,children[*]'
    );
  }

  loadOu(id): Observable<any> {
    return this.httpClient.get(
      'organisationUnits/' + id + '.json?fields=id,name,*'
    );
  }
}
