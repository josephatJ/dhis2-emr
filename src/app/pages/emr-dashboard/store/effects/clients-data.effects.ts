import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerDataService } from '../../services/customer-data.service';
import {
  loadTrackedEntityInstance,
  addLoadedTrackedEntityInstance,
  loadingTrackedEntityInstanceFails,
  loadProgramStageMetadata,
  addLoadedProgramStageMetadata,
  loadingProgramStageMetadataFails
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

  programStageMetadata$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProgramStageMetadata),
      switchMap(action =>
        this.clientsDataService.loadprogramStageDetails(action.stageId).pipe(
          map(metadata =>
            addLoadedProgramStageMetadata({
              programStageMedatadata: metadata
            })
          ),
          catchError(error => of(loadingProgramStageMetadataFails({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private clientsDataService: CustomerDataService
  ) {}
}
