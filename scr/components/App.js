import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Heroes, HeroeDetail } from './sections'
import { configureAxios } from '../api'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from '../redux/'
const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
export default class App extends Component {

  componentWillMount() {
    configureAxios()
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene key='heroes'
              component={Heroes}
              navigationBarStyle={{ backgroundColor: 'rgb(24,24,24)' }}
              title='Heroes'
              titleStyle={{ color: 'rgb(255,0,37)', fontSize: 20, fontWeight: 'bold' }}
              initial={true}
            />
            <Scene key='heroeDetail'
              component={HeroeDetail}
              navigationBarStyle={{ backgroundColor: 'rgb(24,24,24)' }}
              backButtonTintColor={'rgb(255,0,37)'}
              backButtonTextStyle={{ color: 'rgb(255,0,37)' }}
              titleStyle={{ color: 'rgb(255,0,37)', fontSize: 20, fontWeight: 'bold' }}
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}


