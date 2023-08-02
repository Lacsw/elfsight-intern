import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
