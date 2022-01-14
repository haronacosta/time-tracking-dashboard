import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import TimeTracking from './components/TimeTracking/TimeTracking';

ReactDOM.render(
  <React.StrictMode>
    <TimeTracking />
  </React.StrictMode>,
  document.getElementById('root')
);
