import * as types from './types'
import * as api from '../../api'

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

