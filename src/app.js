import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBdFKJOefPJgjIKDxZypXi4lQdeZGkjV6A',
      authDomain: 'manager-227c6.firebaseapp.com',
      databaseURL: 'https://manager-227c6.firebaseio.com',
      projectId: 'manager-227c6',
      storageBucket: '',
      messagingSenderId: '457012643310'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
