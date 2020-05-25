import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  loadSystemAttributes,
  addLoadedAttributes,
  loadingSystemAttributesFail
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SystemAttributesService } from '../../services/system-attributes.service';

@Injectable()
export class SystemAttributesEffects {
  systemAttributes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSystemAttributes),
      switchMap(() =>
        this.systemAttrService.getSystemAttributes().pipe(
          map((attributesData: any) =>
            addLoadedAttributes({ attributes: attributesData['attributes'] })
          ),
          catchError(error => of(loadingSystemAttributesFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private systemAttrService: SystemAttributesService
  ) {}
}
