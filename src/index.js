import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config'
import { FirebaseAppProvider } from 'reactfire'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={config}>
      <App/>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
