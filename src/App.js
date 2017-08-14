import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ReminderApp from './Components/ReminderApp.jsx'; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="title">Reminder-Pro</h1>
          <ReminderApp />   
        </div>
      </Provider>
    );
  }
}

export default App;
