import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as api from '../../../api/'
import styles from './styles'

export default class Heroes extends Component {

    componentWillMount() {
        this.fetchHeroesList()
    }

    fetchHeroesList() {
        api.fetchHeroes().then(response => {
            console.log('fetchHeroes response: ', response)
        }).catch(error => {
            console.log('fetchHeroes error: ', error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>HEROES</Text>
                <Button
                    title={'Pulsar para ir al detalle del Heroe'}
                    color={'lime'}
                    onPress={() => Actions.heroeDetail()}
                />
            </View>
        )
    }
}