import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReportingRatesService } from '../../services/reporting-rates.service';
import {
  loadDataSetReportingRates,
  addLoadedDataSetReportingRates,
  loadingDataSetReportingRatesFail
} from '../actions';
import {
  addAnalyticsToVisualizationLayer,
  sanitizeAnalytics
} from '../../helpers';

@Injectable()
export class ReportingRatesEffects {
  dataSetReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDataSetReportingRates),
      switchMap(action =>
        this.reportingRatesService.getReportingRates(action.dimensions).pipe(
          map(reportingRatesReport => {
            return addLoadedDataSetReportingRates({
              reportingRatesReport: {
                id:
                  action.dimensions.dx +
                  '-' +
                  action.dimensions.pe +
                  '-' +
                  action.dimensions.ou,
                visualizationLayers: addAnalyticsToVisualizationLayer(
                  sanitizeAnalytics(reportingRatesReport),
                  action.dataSet,
                  'TABLE'
                )
              }
            });
          }),
          catchError(error => of(loadingDataSetReportingRatesFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reportingRatesService: ReportingRatesService
  ) {}
}
