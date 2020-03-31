import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadDataSets,
  addLoadedDataSets,
  loadingDataSetsFail
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DataSetsService } from '../../services/data-sets.service';
import { of } from 'rxjs';

@Injectable()
export class DataSetsEffects {
  dataSets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDataSets),
      switchMap(action =>
        this.dataSetsService.getDataSets().pipe(
          map(dataSets =>
            addLoadedDataSets({ dataSets: dataSets['dataSets'] })
          ),
          catchError(error => of(loadingDataSetsFail({ error })))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private dataSetsService: DataSetsService
  ) {}
}
