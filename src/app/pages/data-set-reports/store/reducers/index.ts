import { StoreModule } from '@ngrx/store';
import { dataSetDimensionsReducer } from './dataset-dimensions.reducers';
import { dataSetReportReducer } from './dataset-report.reducer';
import { dataSetsReducer } from './datasets.reducer';

export const reducers: any[] = [
  StoreModule.forFeature('dataSets', dataSetsReducer),
  StoreModule.forFeature('dataSetDimensions', dataSetDimensionsReducer),
  StoreModule.forFeature('dataSetReport', dataSetReportReducer)
];
