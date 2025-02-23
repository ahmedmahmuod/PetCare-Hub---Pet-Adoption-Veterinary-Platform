import { createAction, props } from '@ngrx/store';
import { ServiceModel } from '../../core/models/service/service.model';

export const loadServices = createAction('[Services] Load Services');

export const loadServicesSuccess = createAction(
  '[Services] Load Services Success',
  props<{ services: ServiceModel[] }>()
);

export const loadServicesFailure = createAction(
  '[Services] Load Services Failure',
  props<{ error: any }>()
);