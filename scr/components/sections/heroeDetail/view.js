import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class HeroeDetail extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>DETALLE</Text>
            </View>
        )
    }
}