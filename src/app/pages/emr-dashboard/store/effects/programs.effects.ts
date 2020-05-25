import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadPrograms,
  addLoadedPrograms,
  loadingProgramFail
} from '../actions';
import { switchMap, mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ProgramsService } from '../../services/programs.service';

@Injectable()
export class ProgramDetailsEffects {
  programs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPrograms),
      switchMap(action =>
        from(action.programsIds).pipe(
          mergeMap(program =>
            this.programService.getProgramDetails(program).pipe(
              map(pDetails => addLoadedPrograms({ program: pDetails })),
              catchError(error => of(loadingProgramFail({ error })))
            )
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private programService: ProgramsService
  ) {}
}
