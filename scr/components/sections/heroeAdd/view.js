import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import styles from './styles'
import { Button } from '../../widgets'

export default class HeroeAdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: 'white' }}>{'Heroe Name:'}</Text>
                    <TextInput
                        onChangeText={name => this.state({ name })}
                        value={this.state.name}
                        style={{ backgroundColor: 'white' }}
                    />
                </View>
            </View>
        )
    }
}