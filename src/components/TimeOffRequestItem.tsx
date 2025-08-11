import { IonCard, IonCardContent, IonButton, IonTextarea } from "@ionic/react";
import StatusBadge from './StatusBadge';
import { useState } from 'react';
import { Status, StatusAction, TimeOffRequest } from '../utils/types';

interface Props {
    request: TimeOffRequest;
    isSupervisor?: boolean;
    onAction?: (status: StatusAction, supervisorNote?: string) => void;
}

export default function TimeOffRequestItem({
  request,
  isSupervisor,
  onAction
}: Props) {
  const [supervisorNote, setSupervisorNote] = useState('');
  function handleChange(event: any) {
    if (event.detail.value) {
        setSupervisorNote(event.detail.value);
    }
  }

  return (
    <IonCard>
      <IonCardContent>
        <div>
          <b>{request.type.toUpperCase()}</b> <StatusBadge status={request.status} />
        </div>
        <div>{request.startDate} – {request.endDate}</div>
        <div>{request.notes}</div>
        {isSupervisor && request.status === Status.Pending && (
          <>
            <IonTextarea placeholder="Supervisor's note" value={supervisorNote} onIonChange={handleChange} />
            <IonButton color="success" onClick={() => onAction?.(Status.Approved, supervisorNote)}>Approve</IonButton>
            <IonButton color="danger" onClick={() => onAction?.(Status.Rejected, supervisorNote)}>Reject</IonButton>
          </>
        )}
        {request.supervisorNote && (
          <div><b>Supervisor's note:</b> {request.supervisorNote}</div>
        )}
      </IonCardContent>
    </IonCard>
  )
}
