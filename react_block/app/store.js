import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import eventReducer from '../features/event/eventSlice';
import slrReservationReducer from '../features/slrReservation/slrReservationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    event: eventReducer,
    slrReservation: slrReservationReducer,
  },

});


export default store;