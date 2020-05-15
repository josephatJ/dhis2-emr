import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgUnitsGroupSetsService {
  loadOrgUnitsGroupSets(): Observable<any> {
    return this.httpClient.get(
      'organisationUnitGroupSets.json?fields=id,name,displayName,organisationUnitGroups[id,name,displayName]&paging=false'
    );
  }

  loadOuWithChildren(ou): Observable<any> {
    return this.httpClient.get(
      'organisationUnits/' +
        ou +
        '.json?fields=id,name,code,level,children[id,name,code,level]'
    );
  }

  constructor(private httpClient: NgxDhis2HttpClientService) {}
}
