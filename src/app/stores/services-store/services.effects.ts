import { ServicesService } from './../../core/services/services/services.service';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ServicesActions from './services.actions';

@Injectable()
export class ServicesEffects {
  private actions$ = inject(Actions);
  private serviceServices = inject(ServicesService);

  loadServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServicesActions.loadServices),
      mergeMap(() =>
        this.serviceServices.getAllServices().pipe(
          map((services) => ServicesActions.loadServicesSuccess({ services })),
          catchError((error) => of(ServicesActions.loadServicesFailure({ error })))
        )
      )
    )
  );
}