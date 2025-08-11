import TimeOffRequestForm from '../components/TimeOffRequestForm';
import TimeOffRequestList from '../components/TimeOffRequestList';
import { ReducerType } from '../utils/reducer';
import { TimeOffRequest } from '../utils/types';

export default function EmployeeView({state, dispatch}: ReducerType) {
  
  function handleAddRequest(request: Omit<TimeOffRequest, 'id' | 'status'>) {
    dispatch({ type: 'ADD_REQUEST', payload: request });
  }

  return (
    <>
      <TimeOffRequestForm onFormSubmit={handleAddRequest}/>
      <TimeOffRequestList requestList={state.requests}/>
    </>
  );
}
