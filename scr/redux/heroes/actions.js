import * as types from './types'
import * as api from '../../api'
import { Actions } from 'react-native-router-flux'

function setFetching(value) {
    return {
        type: types.HEROES_SET_FETCHING,
        value: value
    }
}

export function setList(value) {
    return {
        type: types.HEROES_UPDATE_LIST,
        value: value
    }
}

export function setItem(value) {
    return {
        type: types.HEROES_SET_ITEM,
        value: value
    }
}

export function fetchHeroesList() {
    return (dispatch, getState) => {
        dispatch(setList([]))
        dispatch(setFetching(true))
        api
            .fetchHeroes()
            .then(res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.data.results))
            })
            .catch(err => {
                dispatch(setFetching(false))
                console.log('fetchHeroesList error: ', err)
            })
    }
}

export function fetchHeroesListFiltered(text) {
    return (dispatch, getState) => {
        dispatch(setList([]))
        dispatch(setFetching(true))
        api
            .fetchHeroesFiltered(text)
            .then(res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.data.results))
            })
            .catch(err => {
                dispatch(setFetching(false))
                console.log('fetchHeroesList error: ', err)
            })
    }
}

export function postHeroe(data) {
    return (dispatch, getState, api) => {

        // Aqui se realizaría el POST del nuevo Heroe y se recargaría
        // la lista volviendo a llamar al fetchHeroes()
        // La función que realizara el Post habría que declararla en
        // el index de api.
        console.log('Heroe Add: ', data)

        Actions.pop()

    }
}

