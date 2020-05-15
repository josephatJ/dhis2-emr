import { BaseState, initialBaseState } from 'src/app/store/states/base.state';

export interface StandardReportsState extends BaseState {
  reports: Array<any>;
  currentReport: string;
}

export const initialReportState: StandardReportsState = {
  ...initialBaseState,
  reports: [],
  currentReport: ''
};
