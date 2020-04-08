import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataSetReportsService } from '../../services/data-set-reports.service';
import {
  loadDataSetReport,
  addLoadedDataSetReport,
  loadingDataSetReportFail
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { formatReportByDataSetType } from '../../helpers/get-formatted-report.helper';

@Injectable()
export class DataSetReportEffects {
  dataSetReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDataSetReport),
      switchMap(action =>
        this.dataSetReportService.getDataSetReport(action.dimensions).pipe(
          map(dataSetReportAnalytics => {
            return addLoadedDataSetReport({
              dataSetReport: {
                id:
                  action.dimensions.dx +
                  '-' +
                  action.dimensions.pe +
                  '-' +
                  action.dimensions.ou,
                reportHtml: formatReportByDataSetType(
                  action.dimensions.ds,
                  dataSetReportAnalytics
                )
              }
            });
          }),
          catchError(error => of(loadingDataSetReportFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataSetReportService: DataSetReportsService
  ) {}
}
