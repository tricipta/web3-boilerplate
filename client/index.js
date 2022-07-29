import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const workspace = ReactDOM.createRoot(document.getElementById('workspace'));
workspace.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);