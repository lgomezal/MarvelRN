import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'
import { Button } from '../../widgets'

export default class HeroeDetail extends React.Component {

    render() {
        const { heroe } = this.props
        const image = heroe ? { uri: heroe.thumbnail.path + '/landscape_xlarge.' + heroe.thumbnail.extension } : null
        const heroeDescription = heroe && heroe.description ? heroe.description : ''

        return (
            <ScrollView style={{ backgroundColor: 'rgb(24,24,24)' }}>
                <View style={styles.container}>
                    <Image source={image} resizeMode={'cover'} style={styles.image} />
                    <View style={styles.dataContainer}>
                        <Text style={styles.titleStyle}>{'Description:'}</Text>
                        <Text style={styles.text}>{heroeDescription}</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button />
                    </View>
                </View>
            </ScrollView>
        )
    }
}