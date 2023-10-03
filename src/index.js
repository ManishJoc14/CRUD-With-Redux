import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// Enable React Strict Mode to catch potential issues in the development environment.
<React.StrictMode>
    {/* Provide the entire application with access to the Redux store. */}
    <Provider store={store}>
      {/* Render the main application component, which can access the Redux store and Router functionality. */}
      <App />
    </Provider>
</React.StrictMode>
);

