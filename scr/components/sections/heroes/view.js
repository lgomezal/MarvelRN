import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { HeroeCell } from '../../widgets'
import styles from './styles'
import { connect } from 'react-redux'
import * as HeroesActions from '../../../redux/heroes/actions'

class Heroes extends Component {

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
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.heroes.isFetching,
        list: state.heroes.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHeroesList: () => {
            dispatch(HeroesActions.fetchHeroesList())
        },
        onHeroeTapped: (heroe) => {
            dispatch(HeroesActions.setItem(heroe))
            Actions.heroeDetail({ title: heroe.name })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes)
