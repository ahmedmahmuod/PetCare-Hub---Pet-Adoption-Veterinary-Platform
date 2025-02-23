import { ServiceModel } from '../../core/models/service/service.model';

export interface ServicesState {
  services: ServiceModel[];
  loading: boolean;
  error: string | null;
}

export const initialState: ServicesState = {
  services: [],
  loading: false,
  error: null,
};
