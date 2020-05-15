import { BaseState, initialBaseState } from 'src/app/store/states/base.state';

export interface SelectionState extends BaseState {
  orgUnit: string;
  period: string;
}

export const initialSelectionState: SelectionState = {
  ...initialBaseState,
  orgUnit: '',
  period: ''
};
