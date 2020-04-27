import { Injectable } from '@angular/core';
import { OrgUnitsGroupSetsService } from '../../services/org-units-group-sets.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadOrgUnitsGroupSets,
  addLoadedOrgUnitsGroupSets,
  loadingOrgUnitsGroupsSetsFail,
  loadOuWithChildren,
  addLoadedOuWithChildren,
  loadingOuWithChildrenFails
} from '../actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of, from } from 'rxjs';
import {
  getOuWithChildrenEntities,
  getOrgUnitsGroupSets
} from '../selectors/org-units-group-sets.selectors';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

@Injectable()
export class OrgUnitsGroupSetsEffects {
  orgUnitsGroupSets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrgUnitsGroupSets),
      withLatestFrom(this.store.select(getOrgUnitsGroupSets)),
      switchMap(([action, groupSets]) => {
        if (groupSets) {
          return from([]);
        } else {
          return this.orgUnitsGroupSetsService.loadOrgUnitsGroupSets().pipe(
            map(groupSets =>
              addLoadedOrgUnitsGroupSets({
                groupSets: groupSets['organisationUnitGroupSets']
              })
            ),
            catchError(error => of(loadingOrgUnitsGroupsSetsFail({ error })))
          );
        }
      })
    )
  );

  ouWithChildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOuWithChildren),
      withLatestFrom(this.store.select(getOuWithChildrenEntities)),
      switchMap(([action, entities]: [any, any]) => {
        if (entities && entities[action.ou]) {
          return from([]);
        } else {
          return this.orgUnitsGroupSetsService
            .loadOuWithChildren(action.ou)
            .pipe(
              map(loadedOu => addLoadedOuWithChildren({ orgUnit: loadedOu })),
              catchError(error => of(loadingOuWithChildrenFails({ error })))
            );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private orgUnitsGroupSetsService: OrgUnitsGroupSetsService
  ) {}
}
