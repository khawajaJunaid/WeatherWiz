import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Grommet} from 'grommet';
import { grommet } from 'grommet';
import store from './app/store'
import { Provider } from 'react-redux'
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
// import * as Sentry from "@sentry/react";
// import { grommet } from 'grommet';
// import {grommet} from 'C:\Users\Khawaja Junaid\Desktop\weatherapp\weatherwiz\node_modules\grommet\themes'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
console.log(process.env.REACT_APP_SENTRY_DSN);
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
