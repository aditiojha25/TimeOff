import { IonButton, IonCard, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import React, { useState } from 'react';
import { TimeOffRequest, TimeOffType } from "../utils/types";

interface Props {
    onFormSubmit: (request: Omit<TimeOffRequest, 'id' | 'status'>) => void;
}
export default function TimeOffRequestForm({onFormSubmit}: Props) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [type, setType] = useState<TimeOffType>(TimeOffType.Vacation);
    const [notes, setNotes] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStartDate('');
        setEndDate('');
        setType(TimeOffType.Vacation);
        setNotes('');
        onFormSubmit( {startDate, endDate, type, notes} );
    }

    return (
        <IonCard>
            <form onSubmit={handleSubmit}>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Start Date</IonLabel>
                        <IonInput required type='date' min={new Date().toISOString().split('T')[0]} value={startDate}  onIonChange={e => setStartDate(e.target.value as string)}/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">End Date</IonLabel>
                        <IonInput required type='date' min={startDate || new Date().toISOString().split('T')[0]} value={endDate} onIonChange={e => setEndDate(e.target.value as string)} />
                        {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Type</IonLabel>
                        <IonSelect value={type} onIonChange={e => setType(e.target.value)} required>
                        <IonSelectOption value="vacation">Vacation</IonSelectOption>
                        <IonSelectOption value="sick">Sick</IonSelectOption>
                        <IonSelectOption value="personal">Personal</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Notes</IonLabel>
                        <IonTextarea placeholder='Optional notes' value={notes} onIonChange={e => setNotes(e.target.value as string)} />
                    </IonItem>
                </IonList>
                <IonButton expand="full" type="submit">Submit Request</IonButton>
            </form>
        </IonCard>
    )
}