import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM

import App from './App';
import {Provider} from "react-redux"
import  { persistor,store } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  
  </Provider>,
  root
);
