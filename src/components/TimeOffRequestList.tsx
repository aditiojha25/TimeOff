import { StatusAction, TimeOffRequest } from '../utils/types';
import TimeOffRequestItem from './TimeOffRequestItem';

interface BaseProps {
    requestList: TimeOffRequest[];
}
interface SupervisorProps extends BaseProps {
    isSupervisor: true;
    onUpdateStatus: (id: string, status: StatusAction, supervisorNote?: string) => void;
}
interface EmployeeProps extends BaseProps {
    isSupervisor?: false;
    onUpdateStatus?: never;
}
type Props = SupervisorProps | EmployeeProps;

export default function TimeOffRequestList({ isSupervisor, requestList, onUpdateStatus }: Props) {
    return (
    <>
      {requestList.map(req => (
        <TimeOffRequestItem
          key={req.id}
          request={req}
          isSupervisor={isSupervisor}
          onAction={(status, note) => onUpdateStatus && onUpdateStatus(req.id, status, note)}
        />
      ))}
    </>
  );
}
