import React from 'react';
import { Provider } from 'react-redux';
import RootRouter from './router/RootRouter';
import store from './store';
import "./index.css"

function App() {
  return (
    <Provider store = {store}>
    <RootRouter />
    </Provider>
  );
}

export default App;
