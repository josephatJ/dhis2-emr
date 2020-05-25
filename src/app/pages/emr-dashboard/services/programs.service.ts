import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  constructor(private httpClient: NgxDhis2HttpClientService) {}

  getProgramDetails(id): Observable<any> {
    return this.httpClient.get(
      'programs/' +
        id +
        '.json?fields=id,name,*,programStages[programStageDataElements[dataElement[*],*],*]'
    );
  }
}
