import { StoreModule } from '@ngrx/store';
import { PatientsAsOusReducer } from './patients-as-ous.reducer';
import { SystemAttributesReducer } from './system-attributes.reducers';
import { programBasicDetailsReducer } from './programs.reducer';
import { clientsDataReducer } from './clients-data.reducer';

export const reducers: any[] = [
  StoreModule.forFeature('customers', PatientsAsOusReducer),
  StoreModule.forFeature('systemAttributes', SystemAttributesReducer),
  StoreModule.forFeature('programs', programBasicDetailsReducer),
  StoreModule.forFeature('clientsData', clientsDataReducer)
];
