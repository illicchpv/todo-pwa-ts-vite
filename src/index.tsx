import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux';
import store from './store';
import { Login } from './App';
// import App from './App.tsx'

import 'normalize.css';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Login />
    </Provider>
  </StrictMode>
)
