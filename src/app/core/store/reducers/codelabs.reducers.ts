import { State } from '@app/core/models/state.interface';
import { CodelabsActions, CodelabsActionTypes } from '@app/core/store/actions/codelabs.actions';

export const initialState: State = {
 codelabs: [],
 loading: false,
 error: false
};

export function codelabsReducers (
  state: State = initialState,
  action: CodelabsActions
) {
  switch (action.type) {
    case CodelabsActionTypes.GET_CODELABS: {
      return {
        ...state,
        loading: true,
      };
    }
    case CodelabsActionTypes.GET_CODELABS_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        codelabs: action.payload,
      };
    }
    case CodelabsActionTypes.GET_CODELABS_FAILED: {
      return {
        ...state,
        error: true,
        loading: false
      };
    }
    case CodelabsActionTypes.DELETE_CODELAB: {
      return state;
    }
    default: {
      return state;
    }
  }
}


