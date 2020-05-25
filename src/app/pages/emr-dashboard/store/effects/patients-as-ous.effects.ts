import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { OrgUnitsService } from '../../services/org-units.service';
import {
  loadOuChildrenAsPatients,
  addLoadedOuChildrenAsPatients,
  loadingOuChildrenAsPatientFails,
  addFacility
} from '../actions';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PatientsAsOusEffects {
  patientsAsOus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOuChildrenAsPatients),
      switchMap(action =>
        this.ouService.loadOuChidren(action.ouId).pipe(
          mergeMap((ousAsPatients: any) => [
            addLoadedOuChildrenAsPatients({
              patientsBasicInfo: ousAsPatients['children']
            }),
            addFacility({ facility: ousAsPatients })
          ]),
          catchError(error => of(loadingOuChildrenAsPatientFails({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private ouService: OrgUnitsService) {}
}
