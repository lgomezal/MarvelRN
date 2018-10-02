import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native'
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

    }

    _renderItem({ item }) {
        return (
            <HeroeCell
                heroe={item}
                onHeroePress={item => this._onHeroeTapped(item)}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    renderItem={data => this._renderItem(data)}
                    keyExtractor={(item, i) => 'cell' + item.id}
                    extraData={this.state}
                />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes)
