import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './features/slrReservation/slrReservation.css';
import store from './app/store';
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlrReservation, confirmSlrReservation, expireSlrReservation, resetSlrReservation } from './features/slrReservation/slrReservationSlice'
import dayjs from 'dayjs';

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
  useTimeCreated,
} from './features/slrReservation/slrReservationSlice';

const state = store.getState();

function App(slrReservation) {
  const dispatch = useDispatch();

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
  const timeCreated  = useTimeCreated();

    if(status === 'Awaiting Confirmation') {

      return (
    <div className={`slrReservation room-${roomId}`}>
      <div className="title">{ meeting_topic }</div>
      <div className="location">{ room }</div>
      <div className="time">{ time_start } { time_end }</div>
      <div className="status">{ status }</div>
    <button
          onClick={() => dispatch(confirmSlrReservation())}
        >
          Confirm
        </button>
    </div>
  );    
    } else if(status === 'Loading...') {
      return (
    <div className={`slrReservation room-${roomId}`}>
      <div className="title">{ meeting_topic }</div>
    </div>
  );    
    } else {
  return (
    <div className={`slrReservation room-${roomId}`}>
      <div className="title">{ meeting_topic }</div>
      <div className="location">{ room }</div>
      <div className="time">{ time_start } { time_end }</div>
      <div className="status">{ status }</div>
    </div>
  );        
    }

}

export default App;
