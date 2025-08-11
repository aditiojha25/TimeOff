import { ActionDispatch } from 'react';
import { Status, StatusAction, TimeOffRequest } from './types';

export type Action =
  | { type: 'INIT'; payload: TimeOffRequest[] }
  | { type: 'ADD_REQUEST'; payload: Omit<TimeOffRequest, 'id' | 'status'> }
  | { type: 'UPDATE_STATUS'; id: string; status: Status | StatusAction; supervisorNote?: string };

export type State = {
  requests: TimeOffRequest[];
};

export type ReducerType = {
  state: State
  dispatch: ActionDispatch<[action: Action]>
}

export const initialState: State = {
  requests: [],
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INIT': {
        return {
            requests: action.payload
          };
    }
    case 'ADD_REQUEST':
      return {
        requests: [
          ...state.requests,
          { ...action.payload, id: Date.now().toString(), status: Status.Pending },
        ],
      };
    case 'UPDATE_STATUS':
      return {
        requests: state.requests.map(r =>
          r.id === action.id ? { ...r, status: action.status, supervisorNote: action.supervisorNote } : r
        ),
      };
    default:
      return state;
  }
}
