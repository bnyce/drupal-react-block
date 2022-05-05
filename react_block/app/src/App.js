import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './features/slrReservation/slrReservation.css';
import store from './app/store';
import { useSelector } from 'react-redux'

import {
  useMeetingTopic,
  useRoomId,
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
  const roomId  = useRoomId();  
  const room  = useRoom();  
  const full_name  = useFullName();
  const email  = useEmail();
  const how_many_people_  = useHowManyPeople();
  const reservation_date  = useReservationDate();
  const time_start  = useTimeStart();
  const time_end  = useTimeEnd();
  const status  = useStatus();

  return (
    <div className={`slrReservation room-${roomId}`}>
      <div className="title">{ meeting_topic }</div>
      <div className="location">{ room }</div>
      <div className="time">{ time_start } { time_end }</div>
      <div className="status">{ status }</div>
    </div>
  );
}

export default App;
