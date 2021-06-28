import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Grommet} from 'grommet';
import { grommet } from 'grommet';
import store from './app/store'
import { Provider } from 'react-redux'
// import { grommet } from 'grommet';
// import {grommet} from 'C:\Users\Khawaja Junaid\Desktop\weatherapp\weatherwiz\node_modules\grommet\themes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Grommet theme={grommet}> 
        <App />
      </Grommet> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
