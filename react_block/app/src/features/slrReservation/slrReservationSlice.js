import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import store from '../../app/store';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
const initLoading = {
  data: {
    meeting_topic: 'loading...',
    full_name: '',
    email: '',
    how_many_people_: '',
    room: '',
    reservation_date: '',
    time_start: '',
    time_end: '',
    status: '6',
    timer: '11',
  },
  entity: {
      created: ['now']
  }
}
const initialState = {
  value: initLoading,
  status: 'idle',
};
export function useMeetingTopic() {
  return useSelector((state) => state.slrReservation.value.data.meeting_topic)
}
export function useRoom() {
  const myRoomId = useSelector((state) => state.slrReservation.value.data.room);

  function switchRoom(myRoomId) {
    switch (myRoomId) {
      case '3785':
        return "Shared Learning - 205";
      case '3786':
        return "Shared Learning - 206";
      case '3787':
        return "Shared Learning - 207";
      case '3788':
        return "Shared Learning - 408";
      case '3789':
        return "Shared Learning - 409";
      case '3790':
        return "Shared Learning - 471";
      case '3792':
        return "Shared Learning - 508";
      case '3793':
        return "Shared Learning - 509";
      case '3794':
        return "Shared Learning - 522";
      case '3796':
        return "Shared Learning - 531";
      case '3797':
        return "Shared Learning - 605";
      case '3798':
        return "Shared Learning - 613";
      case '3799':
        return "Shared Learning - 614";
      case '3800':
        return "Shared Learning - 615";
      case '3801':
        return "Shared Learning - 621";
      default:
        return "";
    }
  }
  const myRoom = switchRoom(myRoomId);
  return myRoom;
}
export function useRoomId() {
  const myRoomId = useSelector((state) => state.slrReservation.value.data.room);
  return myRoomId;
}
export function useFullName() {
  return useSelector((state) => state.slrReservation.value.data.full_name)
}
export function useRoom2() {
  return useSelector((state) => state.slrReservation.value.data.room)
}
export function useEmail() {
  return useSelector((state) => state.slrReservation.value.data.email)
}
export function useHowManyPeople() {
  return useSelector((state) => state.slrReservation.value.data.how_many_people_)
}
export function useReservationDate() {
  return useSelector((state) => state.slrReservation.value.data.reservation_date)
}
export function useTimeStart() {
  const myTimeId = useSelector((state) => state.slrReservation.value.data.time_start);
  const myTime = dayjs(myTimeId).format('dddd, MMMM D, YYYY - h:mm A to ');
  return myTime;
}
export function useTimeEnd() {
  const myTimeId = useSelector((state) => state.slrReservation.value.data.time_end);
  const myTime = dayjs(myTimeId).format('h:mm A');
  return myTime;
}
export function useTimeCreated() {
  const myTimeCreated = useSelector((state) => state.slrReservation.value.entity.created[0].value);
 // const myTime = dayjs(myTimeId).format('h:mm A');
  return myTimeCreated;
}
export function useStatus() {
  const myStatusId = useSelector((state) => state.slrReservation.value.data.status);

  function switchResult(myStatusId) {
    switch (myStatusId) {
      case '1':
        return "Awaiting Confirmation";
      case '2':
        return "Confirmed";
      case '3':
        return "Expired";
      case '4':
        return "Canceled";
      case '5':
        return "Denied";
      case '6':
        default:
        return "Loading...";
    }
  }
  const myStatus = switchResult(myStatusId);
  return myStatus;
}
export const fetchSLR = createAsyncThunk('slrReservation/fetchSlrReservation', async () => {
  const response = await fetchSlrReservation();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});
export const confirmSLR = createAsyncThunk('slrReservation/confirmSlrReservation', async () => {
  const response = await confirmSlrReservation();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});
export const expireSLR = createAsyncThunk('slrReservation/expireSlrReservation', async () => {
  const response = await expireSlrReservation();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});
//const baseUrl = 'https://library.austintexas.gov';
const baseUrl = 'http://my-first-drupal9-app.lndo.site/';
const webform_id = 'shared_learning_room_reservation';
//const uuid = 'de9d57a5-0295-4c89-a249-b79e20674d8d'; prod
//const uuid = '49d14d1c-f754-4fdb-8894-e1146d812214';

const pathArray = window.location.href.split('/');
console.log('pathArray');
console.log(pathArray);
const uuid = pathArray[5];


const sid = '11504';
const url = baseUrl + '/webform_rest/' + webform_id + '/submission/' + uuid + '?_format=json';
export const resetSlrReservation = createAsyncThunk('slrReservation/resetSlrReservation', async () => {
  const resetBody = JSON.stringify({
    'webform_id': webform_id,
    'uri': ['/webform/webform_id/api'],
    'status': 1,
  });
  const state3 = store.getState();
  const myToken3 = state3.auth.value;
  axios.defaults.headers.patch['X-CSRF-TOKEN'] = myToken3;
  axios.defaults.headers.patch['Content-Type'] = 'application/json';
  const response = await axios.patch(`${baseUrl}/webform_rest/${webform_id}/submission/${uuid}?_format=json`, resetBody).then((response) => {
      
  });
  //response => response.json();
    console.log(response);
    store.dispatch(fetchSlrReservation());
    return response;
});
export const confirmSlrReservation = createAsyncThunk('slrReservation/confirmSlrReservation', async () => {
  const confirmBody = JSON.stringify({
    'webform_id': webform_id,
    'uri': ['/webform/webform_id/api'],
    'status': 2,
  });
  const state = store.getState();
  const myToken = state.auth.value;
  axios.defaults.headers.patch['X-CSRF-TOKEN'] = myToken;
  axios.defaults.headers.patch['Content-Type'] = 'application/json';
  const response = await axios.patch(`${baseUrl}/webform_rest/${webform_id}/submission/${uuid}?_format=json`, confirmBody).then((response) => {});
  return response;
});
export const expireSlrReservation = createAsyncThunk('slrReservation/expireSlrReservation', async () => {
  const expireBody = JSON.stringify({
    'webform_id': webform_id,
    'uri': ['/webform/webform_id/api'],
    'status': 3,
  });
  const state2 = store.getState();
  const myToken2 = state2.auth.value;
  axios.defaults.headers.patch['X-CSRF-TOKEN'] = myToken2;
  axios.defaults.headers.patch['Content-Type'] = 'application/json';
  const response = await axios.patch(`${baseUrl}/webform_rest/${webform_id}/submission/${uuid}?_format=json`, expireBody).then((response) => {});
  return response;
});
export const fetchSlrReservation = createAsyncThunk('slrReservation/fetchSlrReservation', async () => {
  const response = await fetch(url).then(response => response.json()).catch((error) => {
    console.log(error)
  });
  return response;
});
const slrReservationSlice = createSlice({
  name: 'slrReservation',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSlrReservation.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value = action.payload;
      state.value.data.timer = '10';
    }).addCase(expireSlrReservation.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value.data.status = '3';
    }).addCase(confirmSlrReservation.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value.data.status = '2';
    }).addCase(resetSlrReservation.fulfilled, (state, action) => {
      state.status = 'idle';
      //state.value = action.payload;
      //state.value.data.status = '1';
    })
  }
})
export default slrReservationSlice.reducer