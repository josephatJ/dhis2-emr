import { BaseState, initialBaseState } from 'src/app/store/states/base.state';

export interface DataSetsState extends BaseState {
  dataSets: Array<any>;
}

export const initialDataSetsState = {
  dataSets: [],
  ...initialBaseState
};
