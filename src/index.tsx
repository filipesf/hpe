import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import { Global } from '@emotion/react';
import { globalStyles } from 'shared/styles';
import { AppContextProvider } from 'utils/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Global styles={globalStyles} />
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);
