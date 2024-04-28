import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { UserProvider } from './components/CustomProviderComponent/CustomProviderComponent';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="catville">
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
