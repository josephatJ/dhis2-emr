import { Injectable } from '@angular/core';
import { OldReportsService } from '../../services/old-reports.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  loadStdReportsList,
  addLoadedStdReportsList,
  loadingOldStdReportsListFails,
  loadReportMetadata,
  addLoadedReportMetadata,
  loadingReportMetadataFails
} from '../actions';
import {
  switchMap,
  map,
  catchError,
  mergeMap,
  withLatestFrom
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import { sanitizeLoadedReportsTypes } from '../../helpers/sanitize-loaded-reports-types.helper';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getOldReportsMetadataEntities,
  getCountOfLoadedReportTypes
} from '../selectors';

@Injectable()
export class OldReportsEffects {
  reportsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStdReportsList),
      withLatestFrom(this.store.select(getCountOfLoadedReportTypes)),
      switchMap(([action, countOfReportTypes]) => {
        if (countOfReportTypes == 2) {
          return from([]);
        } else {
          return from(action.reportsTypes).pipe(
            mergeMap((reportType: any) =>
              this.reportsService.loadReportsList(reportType).pipe(
                map(reportsList =>
                  addLoadedStdReportsList({
                    reportsList: sanitizeLoadedReportsTypes(reportsList)
                  })
                ),
                catchError(error =>
                  of(loadingOldStdReportsListFails({ error }))
                )
              )
            )
          );
        }
      })
    )
  );

  reportMetadata$c = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReportMetadata),
      withLatestFrom(this.store.select(getOldReportsMetadataEntities)),
      switchMap(([action, reportMetadataEntitiess]: [any, any]) => {
        if (reportMetadataEntitiess[action.reportId]) {
          return from([]);
        } else {
          return this.reportsService
            .loadReportContents(action.reportId, action.reportType)
            .pipe(
              map(report => addLoadedReportMetadata({ report })),
              catchError(error => of(loadingReportMetadataFails({ error })))
            );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private reportsService: OldReportsService,
    private store: Store<State>
  ) {}
}
