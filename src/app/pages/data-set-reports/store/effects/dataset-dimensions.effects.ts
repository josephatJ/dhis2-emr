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
import { formDataSetDimension } from '../../helpers/format-dataset-dimensions.helpers';

@Injectable()
export class DataSetDimensionsEffects {
  dataSetDimensionsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDataSetDimensions),
      switchMap(action =>
        this.dataSetReportsService.getDataSetDimensions(action.dataSetId).pipe(
          map(dataSetDimensions => {
            const dimensionsData = {
              id: action.dataSetId,
              dimensions: formDataSetDimension(
                dataSetDimensions['dimensions'][0]
              )
            };
            return addLoadedDataSetDimensions({
              dataSetDimensions: dimensionsData
            });
          }),
          catchError((error: any) =>
            of(loadingDataSetDimensionsFail({ error }))
          )
        )
      )
    )
  );

  constructor(
    private dataSetReportsService: DataSetReportsService,
    private actions$: Actions
  ) {}
}
