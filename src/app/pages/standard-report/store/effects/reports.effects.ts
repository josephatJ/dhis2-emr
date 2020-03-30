import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReportsService } from '../../services/reports.service';
import {
  getReports,
  addLoadedReports,
  loadingStandardReportsFail
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class StandardReportsEffects {
  loadedStandardReportsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getReports),
      switchMap(() =>
        this.reportsService.getReports().pipe(
          map(reports => addLoadedReports({ Reports: reports })),
          catchError(error => of(loadingStandardReportsFail({ error })))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private reportsService: ReportsService
  ) {}
}
