
import { IonBadge } from '@ionic/react';
import { Status } from '../utils/types';

export default function StatusBadge({ status }: { status: string }) {
    const color = status === Status.Approved ? 'success' : status === Status.Rejected ? 'danger' : 'warning';
    return <IonBadge color={color} style={{ marginLeft: 8 }}>{status.toUpperCase()}</IonBadge>;
  }