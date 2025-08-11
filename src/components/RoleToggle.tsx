import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

export default function RoleToggle({ role, setRole }: { role: string; setRole: (r: string) => void }) {
  return (
    <IonSegment value={role} onIonChange={e => setRole(e.detail.value as string)}>
      <IonSegmentButton value="employee"><IonLabel>Employee</IonLabel></IonSegmentButton>
      <IonSegmentButton value="supervisor"><IonLabel>Supervisor</IonLabel></IonSegmentButton>
    </IonSegment>
  );
}
