import React from 'react'
import { View, Text, Image, ScrollView, Animated } from 'react-native'
import styles from './styles'
import { Button } from '../../widgets'
import { Actions } from 'react-native-router-flux'

export default class HeroeDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageExpanded: true,
            animatedHeight: new Animated.Value(250)
        }
    }

    _onShowImage() {
        if (this.state.imageExpanded) {
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 0,
                    duration: 500,
                }
            ).start()
            this.setState({ imageExpanded: false })
        } else {
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 250,
                    duration: 500,
                }
            ).start()
            this.setState({ imageExpanded: true })
        }
    }

    render() {
        const { heroe } = this.props
        const image = heroe ? { uri: heroe.thumbnail.path + '/landscape_xlarge.' + heroe.thumbnail.extension } : null
        const heroeDescription = heroe && heroe.description ? heroe.description : ''

        return (
            <ScrollView style={{ backgroundColor: 'rgb(24,24,24)' }}>
                <View style={styles.container}>
                    <Animated.Image source={image} resizeMode={'cover'} style={[styles.image, { height: this.state.animatedHeight }]} />
                    <View style={styles.dataContainer}>
                        <Text style={styles.titleStyle}>{'Description:'}</Text>
                        <Text style={styles.text}>{heroeDescription}</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button
                            label={this.state.imageExpanded ? 'Hide Image' : 'Show Image'}
                            onPress={() => this._onShowImage()}
                        />
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button
                            label={'Edit'}
                            onPress={() => Actions.heroeAdd({ heroe, isEdit: true })}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}