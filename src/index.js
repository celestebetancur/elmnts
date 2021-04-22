import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config'
import { FirebaseAppProvider } from 'reactfire'

ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={config}>
    <App />
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
