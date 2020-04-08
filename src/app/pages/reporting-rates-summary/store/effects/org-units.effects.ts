import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import {
  loadOuWithChildren,
  addLoadedOuWithChildren,
  loadingOuWithChildrenFails
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OuWithChildrenEffects {
  ouWithChildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOuWithChildren),
      switchMap(action =>
        this.httpClient
          .get(
            'organisationUnits/' +
              action.ouId +
              '.json?fields=id,name,code,level,children[id,name,code,level]'
          )
          .pipe(
            map(loadedOu => addLoadedOuWithChildren({ orgUnit: loadedOu })),
            catchError(error => of(loadingOuWithChildrenFails({ error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private httpClient: NgxDhis2HttpClientService
  ) {}
}
