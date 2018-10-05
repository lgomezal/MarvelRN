import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable'

export default class HeroeCell extends Component {

    static defaultProps = {
        index: 0,
        heroe: null,
        onHeroePress: () => { },
    }

    render() {
        const { heroe, index } = this.props
        const name = heroe ? heroe.name : ''
        const image = heroe ? { uri: heroe.thumbnail.path + '/landscape_xlarge.' + heroe.thumbnail.extension } : null
        const animation = index % 2 ? 'bounceInLeft' : 'bounceInRight'

        return (
            <Animatable.View animation={animation}>
                <TouchableOpacity
                    onPress={() => this.props.onHeroePress(heroe)}>
                    <Image
                        source={image}
                        style={styles.image}
                        resizeMode={'cover'}
                    />
                    <View style={styles.detailContainer}>
                        <Text style={styles.label}>{name}</Text>
                    </View>
                </TouchableOpacity>
            </Animatable.View >
        )
    }
}