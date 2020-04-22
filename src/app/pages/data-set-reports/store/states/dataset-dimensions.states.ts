import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface DataSetDimensionsState extends BaseState, EntityState<any> {
  dataSetDimensions: any;
}

export const dataSetDimensionsAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialDataSetDimensionsState = dataSetDimensionsAdapter.getInitialState(
  {
    ...initialBaseState,
    dataSetDimensions: {}
  }
);
