import { createReducer, on } from '@ngrx/store';
import {
  initialDataSetReportState,
  dataSetReportAdapter
} from '../states/dataset-report.states';
import {
  loadDataSetReport,
  addLoadedDataSetReport,
  loadingDataSetReportFail
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from 'src/app/store/states/base.state';

const reducer = createReducer(
  initialDataSetReportState,
  on(loadDataSetReport, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedDataSetReport, (state, { dataSetReport }) =>
    dataSetReportAdapter.addOne(dataSetReport, { ...state, ...loadedBaseState })
  ),
  on(loadingDataSetReportFail, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function dataSetReportReducer(state, action) {
  return reducer(state, action);
}
