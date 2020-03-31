import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import {
  ReportingRatesState,
  reportingRatesAdapter
} from '../states/reporting-rates.states';

export const getReportingRatesState: MemoizedSelector<
  object,
  ReportingRatesState
> = createFeatureSelector<ReportingRatesState>('reportingRates');

export const {
  selectEntities: getReportingRatesVisualizationLayersEntities,
  selectAll: getAllReportingRatesVisualizationLayers
} = reportingRatesAdapter.getSelectors(getReportingRatesState);

export const getReportingRatesVisualizationLayersById = createSelector(
  getReportingRatesVisualizationLayersEntities,
  (entities, props) => entities[props.id]
);
