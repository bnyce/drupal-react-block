import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
//import { fetchAuth } from './features/auth/authSlice'
//import { fetchEvent } from './features/event/eventSlice'
import { fetchSlrReservation, confirmSlrReservation } from './features/slrReservation/slrReservationSlice'
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('ReactBlock');
const root = createRoot(container);
  
//store.dispatch(fetchAuth());
//store.dispatch(fetchEvent());

store.dispatch(fetchSlrReservation());
setTimeout(function(){store.dispatch(confirmSlrReservation())}, 1000);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();