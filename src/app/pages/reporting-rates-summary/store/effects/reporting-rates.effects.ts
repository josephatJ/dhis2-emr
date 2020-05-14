import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of, from } from 'rxjs';
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
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getReportingRatesVisualizationLayersEntities } from '../selectors/reporting-rates.selectors';

@Injectable()
export class ReportingRatesEffects {
  dataSetReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDataSetReportingRates),
      withLatestFrom(
        this.store.select(getReportingRatesVisualizationLayersEntities)
      ),
      switchMap(([action, entities]: [any, any]) => {
        if (
          entities &&
          entities[
            action.dimensions.dx +
              '-' +
              action.dimensions.pe +
              '-' +
              action.dimensions.ou
          ]
        ) {
          return from([]);
        } else {
          return this.reportingRatesService
            .getReportingRates(action.dimensions)
            .pipe(
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
              catchError(error =>
                of(loadingDataSetReportingRatesFail({ error }))
              )
            );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private reportingRatesService: ReportingRatesService,
    private store: Store<State>
  ) {}
}
