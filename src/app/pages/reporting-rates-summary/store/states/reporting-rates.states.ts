import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ReportingRatesState extends BaseState, EntityState<any> {}

export const reportingRatesAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialReportingRatesState = reportingRatesAdapter.getInitialState(
  {
    ...initialBaseState
  }
);
