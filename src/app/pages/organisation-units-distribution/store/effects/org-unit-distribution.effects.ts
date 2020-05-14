import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrgUnitDistributionService } from '../../services/org-unit-distribution.service';
import {
  loadOrgUnitsDistributionData,
  addLoadedDataForOrgUnitDistribution,
  loadingOuDistributionFails
} from '../actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getOrgUnitDistributionEntities } from '../selectors/org-unit-distribution.selectors';

@Injectable()
export class OrgUnitsDistributionEffects {
  ouDistribution$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrgUnitsDistributionData),
      withLatestFrom(this.store.select(getOrgUnitDistributionEntities)),
      switchMap(([action, entities]: [any, any]) => {
        if (
          entities &&
          entities[
            action.ouDimensions.ous.join('-') +
              '-' +
              action.ouDimensions.distributionType
          ]
        ) {
          return from([]);
        } else {
          return this.ouDistributionService
            .getOuDistribution(action.ouDimensions)
            .pipe(
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
            );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private ouDistributionService: OrgUnitDistributionService,
    private store: Store<State>
  ) {}
}
