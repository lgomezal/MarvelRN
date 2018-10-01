import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Heroes, HeroeDetail } from './sections'
import { configureAxios } from '../api'

export default class App extends Component {

  componentWillMount() {
    configureAxios()
  }

  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='heroes' component={Heroes} title='Heroes' initial={true} />
          <Scene key='heroeDetail' component={HeroeDetail} title='Heroe Detail' />
        </Stack>
      </Router>
    )
  }
}


