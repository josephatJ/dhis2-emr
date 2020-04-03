import { Injectable } from '@angular/core';
import { ResourcesService } from '../../services/resources.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  loadResources,
  addLoadedResources,
  loadingResourcesFail
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ResourcesEffects {
  resources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResources),
      switchMap(ation =>
        this.resourceService.getResources().pipe(
          map(documents =>
            addLoadedResources({ resources: documents['documents'] })
          ),
          catchError(error => of(loadingResourcesFail({ error })))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private resourceService: ResourcesService
  ) {}
}
