import { Injectable } from '@angular/core';
import { DataSetReportsService } from '../../services/data-set-reports.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadDataSetDimensions,
  loadingDataSetDimensionsFail,
  addLoadedDataSetDimensions
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DataSetDimensionsEffects {
  dataSetDimensions$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadDataSetDimensions),
        switchMap(action =>
          this.dataSetReportsService
            .getDataSetDimensions(action.dataSetId)
            .pipe(
              map(dataSetDimensions =>
                addLoadedDataSetDimensions({
                  dataSetDimensions: {
                    id: action.dataSetId,
                    dimensions: dataSetDimensions['dimensions']
                  }
                })
              ),
              catchError((error: any) =>
                of(loadingDataSetDimensionsFail({ error }))
              )
            )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private dataSetReportsService: DataSetReportsService,
    private actions$: Actions
  ) {}
}
