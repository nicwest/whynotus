import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, GlobalStyles} from './App';
import {store} from './store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

  <Provider store={store}>
    <GlobalStyles />
    <App />
    </Provider>
  </React.StrictMode>
);
