import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrgUnitDistributionService } from '../../services/org-unit-distribution.service';
import {
  loadOrgUnitsDistributionData,
  addLoadedDataForOrgUnitDistribution,
  loadingOuDistributionFails
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OrgUnitsDistributionEffects {
  ouDistribution$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrgUnitsDistributionData),
      switchMap(action =>
        this.ouDistributionService.getOuDistribution(action.ouDimensions).pipe(
          map(orgUniDistribution =>
            addLoadedDataForOrgUnitDistribution({
              orgUniDistribution: {
                id:
                  action.ouDimensions.ous.join('-') +
                  '-' +
                  action.ouDimensions.distributionType,
                data: orgUniDistribution
              }
            })
          ),
          catchError(error => of(loadingOuDistributionFails({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ouDistributionService: OrgUnitDistributionService
  ) {}
}
