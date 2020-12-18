import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './pages/CounterPage/containers/CounterContainer';
import Routes from './routes/Routes';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
