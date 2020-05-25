import { createReducer, on } from '@ngrx/store';
import {
  initialProgramDetailsState,
  programDetailsAdapter
} from '../states/programs.states';
import {
  loadPrograms,
  addLoadedPrograms,
  loadingProgramFail
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from 'src/app/store/states/base.state';

const reducer = createReducer(
  initialProgramDetailsState,
  on(loadPrograms, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedPrograms, (state, { program }) =>
    programDetailsAdapter.addOne(program, { ...state, ...loadedBaseState })
  ),
  on(loadingProgramFail, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function programBasicDetailsReducer(state, action) {
  return reducer(state, action);
}
