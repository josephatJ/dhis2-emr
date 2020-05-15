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
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { sanitizeLoadedReportsTypes } from '../../helpers/sanitize-loaded-reports-types.helper';

@Injectable()
export class OldReportsEffects {
  reportsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStdReportsList),
      switchMap(action =>
        from(action.reportsTypes).pipe(
          mergeMap((reportType: any) =>
            this.reportsService.loadReportsList(reportType).pipe(
              map(reportsList =>
                addLoadedStdReportsList({
                  reportsList: sanitizeLoadedReportsTypes(reportsList)
                })
              ),
              catchError(error => of(loadingOldStdReportsListFails({ error })))
            )
          )
        )
      )
    )
  );

  reportMetadata$c = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReportMetadata),
      switchMap(action =>
        this.reportsService.loadReportContents(action.reportId).pipe(
          map(report => addLoadedReportMetadata({ report })),
          catchError(error => of(loadingReportMetadataFails({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reportsService: OldReportsService
  ) {}
}
