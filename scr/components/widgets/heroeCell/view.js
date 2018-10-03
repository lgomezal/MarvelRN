import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import styles from './styles'

export default class HeroeCell extends Component {

    static defaultProps = {
        heroe: null,
        onHeroePress: () => { },
    }

    //style = { styles.cellContainer }

    render() {
        const { heroe, selected } = this.props
        const name = heroe ? heroe.name : ''
        const image = heroe ? { uri: heroe.thumbnail.path + '/landscape_xlarge.' + heroe.thumbnail.extension } : null

        return (
            <TouchableOpacity
                onPress={() => this.props.onHeroePress(heroe)}
            >
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode={'cover'}
                />
                <View style={styles.detailContainer}>
                    <Text style={styles.label}>{name}</Text>
                </View>
            </TouchableOpacity >
        )
    }
}