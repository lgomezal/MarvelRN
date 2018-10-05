import React, { Component } from 'react'
import { StatusBar, TouchableOpacity, Text } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Heroes, HeroeDetail, HeroeAdd } from './sections'
import { configureAxios } from '../api'
import * as Colors from '../commons/colors'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from '../redux/'
const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const sceneDefaultStyles = {
  navigationBarStyle: { backgroundColor: Colors.mainDark },
  backButtonTintColor: Colors.main,
  backButtonTextStyle: { color: Colors.main },
  titleStyle: { color: Colors.main, fontSize: 20, fontWeight: 'bold' },
}

const RightButton = props => (
  <TouchableOpacity style={{ padding: 10 }} onPress={() => Actions.heroeAdd()}>
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Add Heroe'}</Text>
  </TouchableOpacity >
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
              title='Heroes'
              {...sceneDefaultStyles}
              renderRightButton={RightButton}
              initial={true}
            />
            <Scene key='heroeDetail'
              component={HeroeDetail}
              {...sceneDefaultStyles}
            />
            <Scene key='heroeAdd'
              component={HeroeAdd}
              title='Add Heroe'
              {...sceneDefaultStyles}
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}


