import axios from 'axios'
import * as constans from '../commons/constans'

export function configureAxios() {
    axios.defaults.baseURL = constans.BASE_URL

}

export function fetchHeroes() {
    const url = constans.CHARACTERS_ENDPOINT + constans.TIMESTAMP + constans.PUBLIC_API_KEY +
        constans.PUBLIC_API + constans.HASH_KEY + constans.HASH
    console.log('url: ', url)
    return axios.get(url)
}