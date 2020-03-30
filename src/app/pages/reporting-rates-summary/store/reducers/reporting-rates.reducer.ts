import { createReducer, on } from '@ngrx/store';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from 'src/app/store/states/base.state';
import {
  initialReportingRatesState,
  reportingRatesAdapter
} from '../states/reporting-rates.states';
import {
  loadDataSetReportingRates,
  addLoadedDataSetReportingRates,
  loadingDataSetReportingRatesFail
} from '../actions';

const reducer = createReducer(
  initialReportingRatesState,
  on(loadDataSetReportingRates, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedDataSetReportingRates, (state, { reportingRatesReport }) =>
    reportingRatesAdapter.addOne(reportingRatesReport, {
      ...state,
      ...loadedBaseState
    })
  ),
  on(loadingDataSetReportingRatesFail, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function reportingRatesReducer(state, action) {
  return reducer(state, action);
}
