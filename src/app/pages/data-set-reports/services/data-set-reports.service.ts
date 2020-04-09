import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSetReportsService {
  getDataSetReport(dimension): Observable<any> {
    console.log('dimension', dimension);
    if (dimension.ds.formType == 'CUSTOM') {
      return this.httpClient.get(
        '../../../api/dataSetReport/custom?filter=&ds=' +
          dimension.dx +
          '&pe=' +
          dimension.pe +
          '&ou=' +
          dimension.ou +
          '&selectedUnitOnly=false',
        {
          headers: {
            'Content-Type': 'text/html;charset=ISO-8859-1'
          },
          responseType: 'text'
        }
      );
    } else {
      return this.dhis2HttpClient.get(
        'dataSetReport?filter=&ds=' +
          dimension.dx +
          '&pe=' +
          dimension.pe +
          '&ou=' +
          dimension.ou +
          '&selectedUnitOnly=false'
      );
    }
  }

  getDataSetDimensions(dataSetId): Observable<any> {
    return this.httpClient.get(
      'dimensions/dataSet/' +
        dataSetId +
        '.json?fields=id,displayName,items[id,displayName&order=name~asc&paging=false'
    );
  }

  constructor(
    private httpClient: HttpClient,
    private dhis2HttpClient: NgxDhis2HttpClientService
  ) {}
}
