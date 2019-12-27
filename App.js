import React from 'react';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import { AppContainer } from './App.styles'
import Dashboard from './src/Dashboard.js'

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Dashboard />
      </AppContainer>
    </Provider>
  );
}
