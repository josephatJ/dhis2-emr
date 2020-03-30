import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface DataSetReportState extends BaseState, EntityState<any> {}

export const dataSetReportAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialDataSetReportState = dataSetReportAdapter.getInitialState({
  ...initialBaseState
});
