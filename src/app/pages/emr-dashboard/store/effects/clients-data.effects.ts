import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerDataService } from '../../services/customer-data.service';
import {
  loadTrackedEntityInstance,
  addLoadedTrackedEntityInstance,
  loadingTrackedEntityInstanceFails
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ClientsDataEffects {
  trackedEntityInstance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTrackedEntityInstance),
      switchMap((action: any) =>
        this.clientsDataService
          .getTrackedEntityInstancesList(action.dimensions)
          .pipe(
            map(trackedEntityInstance =>
              addLoadedTrackedEntityInstance({
                trackedEntityInstance:
                  trackedEntityInstance['trackedEntityInstances'][0]
              })
            ),
            catchError(error =>
              of(loadingTrackedEntityInstanceFails({ error }))
            )
          )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private clientsDataService: CustomerDataService
  ) {}
}
