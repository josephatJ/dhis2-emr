import { selectionReducer } from './selection.reducer';
import { reportsReducer } from './report.reducers';
import { StoreModule } from '@ngrx/store';

export const reducers: Array<any> = [
  StoreModule.forFeature('selections', selectionReducer),
  StoreModule.forFeature('reports', reportsReducer)
];
