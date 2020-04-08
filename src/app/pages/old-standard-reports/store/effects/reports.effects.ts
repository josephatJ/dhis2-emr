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
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OldReportsEffects {
  reportsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStdReportsList),
      switchMap(() =>
        this.reportsService.loadReportsList().pipe(
          map(reportsList =>
            addLoadedStdReportsList({ reportsList: reportsList['reports'] })
          ),
          catchError(error => of(loadingOldStdReportsListFails({ error })))
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
