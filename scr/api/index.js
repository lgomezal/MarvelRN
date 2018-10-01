import axios from 'axios'

const BASE_URL = 'https://gateway.marvel.com'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL

}

export function fetchHeroes() {
    const url = '/v1/public/characters?ts=1&apikey=b5b60c835e8a2eda8e93cf538c005fc1&hash=4b234d1498b6bb5a9ec2616325ca4113'
    return axios.get(url)
}