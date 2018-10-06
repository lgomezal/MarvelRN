import axios from 'axios'
import * as constans from '../commons/constans'

export function configureAxios() {
    axios.defaults.baseURL = constans.BASE_URL

}

export function fetchHeroes() {
    const url =
        constans.CHARACTERS_ENDPOINT +
        constans.LIMIT_REG +
        constans.TIMESTAMP +
        constans.PUBLIC_API_KEY +
        constans.PUBLIC_API +
        constans.HASH_KEY +
        constans.HASH
    //console.log('url: ', url)
    return axios.get(url)
}

export function fetchHeroesFiltered(text) {
    const url =
        constans.CHARACTERS_ENDPOINT +
        constans.NAME_STARTS +
        text +
        constans.AND +
        constans.LIMIT_REG +
        constans.TIMESTAMP +
        constans.PUBLIC_API_KEY +
        constans.PUBLIC_API +
        constans.HASH_KEY +
        constans.HASH
    //console.log('url: ', url)
    return axios.get(url)
}