import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { AuthProvider } from './components/Authentication/Firebase';
import { UserProvider } from './components/Authentication/User';
import './index.css';
import store from './redux/store';

render(
  <Provider store={store}>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </Provider>,
  document.getElementById('root'),
);
