import { createReducer, on } from '@ngrx/store';
import * as ServicesActions from './services.actions';
import { initialState } from './services.state';

export const servicesReducer = createReducer(
  initialState,
  on(ServicesActions.loadServices, (state) => ({ ...state, loading: true })),
  on(ServicesActions.loadServicesSuccess, (state, { services }) => ({
    ...state,
    loading: false,
    services,
    error: null,
  })),
  on(ServicesActions.loadServicesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
