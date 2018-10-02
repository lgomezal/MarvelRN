import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import styles from './styles'

export default class HeroeCell extends Component {

    static defaultProps = {
        heroe: null,
        onHeroePress: () => { },
    }

    render() {
        const { heroe, selected } = this.props
        const name = heroe ? heroe.name : ''

        console.log('Heroe:', heroe)

        return (
            <TouchableOpacity
                onPress={() => this.props.onHeroePress(heroe)}
                style={styles.cellContainer}
            >
                <Image
                    source={{ uri: heroe.thumbnail.path + '/landscape_xlarge.' + heroe.thumbnail.extension }}
                    style={styles.image}
                    resizeMode={'cover'}
                />
                <View style={styles.cellContainer}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </TouchableOpacity >
        )
    }
}