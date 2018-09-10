import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './app/store/configre_soter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>test</h1>
      </Provider>
    );
  }
}

export default App;
