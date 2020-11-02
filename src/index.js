import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {DataLayer} from "./DataLayer";
import reducer, { intialState } from './reducer';

ReactDOM.render(
  <React.StrictMode >
   {/* we are now pushing every data that we got to data layer so to avoid the prop drilling problem  */}
  <DataLayer intialState={intialState} reducer={reducer}> 
    <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);


