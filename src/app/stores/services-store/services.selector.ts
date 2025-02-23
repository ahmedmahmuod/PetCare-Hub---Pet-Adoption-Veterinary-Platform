import { ServicesState } from './services.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectServicesState = createFeatureSelector<ServicesState>('services');

export const selectServices = createSelector(
  selectServicesState,
  (state) => state.services || []
);

export const selectServicesLoading = createSelector(
  selectServicesState,
  (state) => state.loading
);

export const selectServicesError = createSelector(
  selectServicesState,
  (state) => state.error
);
