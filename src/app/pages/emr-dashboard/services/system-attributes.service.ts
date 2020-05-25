import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemAttributesService {
  constructor(private httpClient: NgxDhis2HttpClientService) {}

  getSystemAttributes(): Observable<any> {
    return this.httpClient.get('attributes.json?paging=false&fields=*');
  }
}
