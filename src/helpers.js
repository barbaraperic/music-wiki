import axios from 'axios'
import { Credentials } from './components/Credentials'

const spotify = Credentials()

export function getToken () {
  return axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  })
}

export function getGenres(token) {
  return axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token}
  })
}

export function getPlaylist (val, token) {
  return axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token}
  })
}

export function getTracks(playlist, token) {
  return axios(`https://api.spotify.com/v1/playlists/${playlist}/tracks?limit=10`, {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + token
    }
  })
}