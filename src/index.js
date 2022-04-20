import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import './i18n.js';
import App from 'App';
import 'modern-normalize';
import './assets/css/fonts.css';
import './assets/css/variables.css';
import './assets/css/index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  root,
);
