import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './app/store/configre_soter'
import Root from './app/container/template/root'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}

export default App;
