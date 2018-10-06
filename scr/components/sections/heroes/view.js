import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { HeroeCell } from '../../widgets'
import styles from './styles'
import * as HeroesActions from '../../../redux/heroes/actions'
import Search from 'react-native-search-box'
import * as Colors from '../../../commons/colors'

export default class Heroes extends Component {

    componentDidMount() {
        this.props.fetchHeroesList()
    }

    _onHeroeTapped(heroe) {
        this.props.onHeroeTapped(heroe)
    }

    _renderItem(item, index) {
        return (
            <HeroeCell
                heroe={item}
                onHeroePress={item => this._onHeroeTapped(item)}
                index={index}
            />
        )
    }

    _renderActivityIndicator() {
        if (!this.props.isFetching) {
            return null
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                <ActivityIndicator size='large' color={'red'} animating={true} />
            </View>
        )
    }

    render() {
        const { list } = this.props

        return (
            <View style={styles.container}>
                <Search
                    ref='search_box'
                    backgroundColor={Colors.mainDark}
                    tintColorSearch={Colors.mainDark}
                    placeholderTextColor={Colors.main}
                    titleCancelColor={Colors.main}
                    tintColorDelete={Colors.main}
                    keyboardDismissOnSubmit={true}
                    onCancel={() => this.onCancel()}
                    onChangeText={(text) => this.onChangeText(text)} />
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    keyExtractor={(item, i) => 'cell' + item.id}
                    extraData={this.state}
                />
                {this._renderActivityIndicator()}
            </View>
        )
    }

    onChangeText = (e) => {
        // Filter with 3 or more characters written
        if (e && e.length > 2) {

            let text = e.toLowerCase()
            if (!text || text === '') {
                this.render()
            }
            else {
                this.props.fetchHeroesListFiltered(text)
            }
        } else {
            this.render()
        }

    }

    onCancel = () => {
        this.props.fetchHeroesList()
    }
}

