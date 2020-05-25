import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { addSystemInfo, loadSystemInfo, loadSystemInfoFail } from '../actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SystemInfoEffects implements OnInitEffects {
  loadSystemInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSystemInfo),
      switchMap(() =>
        this.httpClient.get('../../../api/system/info').pipe(
          map((systemInfo: any) =>
            addSystemInfo({
              systemInfo
            })
          ),
          catchError((error: any) => of(loadSystemInfoFail({ error })))
        )
      )
    )
  );

  ngrxOnInitEffects() {
    return loadSystemInfo();
  }

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
