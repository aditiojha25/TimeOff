import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import EmployeeView from './pages/EmployeeView';
import SupervisorView from './pages/SupervisorView';
import RoleToggle from './components/RoleToggle';
import { useEffect, useReducer, useState } from 'react';
import { initialState, reducer } from './utils/reducer';

setupIonicReact();

const App: React.FC = () => {
  const [role, setRole] = useState('employee');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('timeoff-requests');
    if (data) {
      dispatch({ type: 'INIT', payload: JSON.parse(data) });
    }
    setIsBlocked(true);
  }, []);

  useEffect(() => {
    if (isBlocked) {
      localStorage.setItem('timeoff-requests', JSON.stringify(state.requests));
    }
  }, [state.requests, isBlocked]);

  return (
    <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Time Off App</IonTitle>
            <RoleToggle role={role} setRole={setRole} />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {role === 'employee' ? 
          <EmployeeView state={state} dispatch={dispatch}/> : 
          <SupervisorView state={state} dispatch={dispatch}/>
          }
        </IonContent>
    </IonApp>
  );
}

export default App;
