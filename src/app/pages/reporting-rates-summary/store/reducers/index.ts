import { StoreModule } from '@ngrx/store';
import { dataSetDimensionsReducer } from './dataset-dimensions.reducers';
import { dataSetsReducer } from './datasets.reducer';
import { reportingRatesReducer } from './reporting-rates.reducer';
import { ouWithChildrenReducer } from './org-units.reducer';

export const reducers: any[] = [
  StoreModule.forFeature('dataSets', dataSetsReducer),
  StoreModule.forFeature('dataSetDimensions', dataSetDimensionsReducer),
  StoreModule.forFeature('reportingRates', reportingRatesReducer),
  StoreModule.forFeature('ousWithChildren', ouWithChildrenReducer)
];
