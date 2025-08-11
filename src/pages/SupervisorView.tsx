import TimeOffRequestList from '../components/TimeOffRequestList';
import { ReducerType } from '../utils/reducer';
import { StatusAction } from '../utils/types';

export default function SupervisorView({state, dispatch}: ReducerType) {

   function handleUpdateStatus(id: string, status: StatusAction, supervisorNote?: string) {
    dispatch({ type: 'UPDATE_STATUS', id, status, supervisorNote });
  }

  return (
    <>
      <h2>Review Requests</h2>
      <TimeOffRequestList
        requestList={state.requests}
        isSupervisor
        onUpdateStatus={handleUpdateStatus}
      />
    </>
  );
}
