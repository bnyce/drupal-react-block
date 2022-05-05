import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import store from './app/store';
import { useSelector } from 'react-redux'

import {
  useMeetingTopic,
  useRoom,
  useFullName,
  useEmail,
  useHowManyPeople,
  useReservationDate,
  useTimeStart,
  useTimeEnd,
  useStatus,
} from './features/slrReservation/slrReservationSlice';

const state = store.getState();

function App(slrReservation) {

  const meeting_topic  = useMeetingTopic();
  const room  = useRoom();
    
    
  const full_name  = useFullName();
  const email  = useEmail();
  const how_many_people_  = useHowManyPeople();
  const reservation_date  = useReservationDate();
  const time_start  = useTimeStart();
  const time_end  = useTimeEnd();
  const status  = useStatus();

  return (
    <div className="App">
      { meeting_topic }<br/>
      { room }<br/>
      { full_name }<br/>
      { email }<br/>
      { how_many_people_ }<br/>
      { time_start } { time_end }<br/>
      { status }
    </div>
  );
}

export default App;
