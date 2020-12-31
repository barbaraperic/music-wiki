import React, { useState, useEffect } from 'react'

import {getToken, getTracks} from '../helpers'

const Artists = () => {

  const [ token, setToken ] = useState('')
  const [ artists, setArtists ] = useState({ list: []})

  useEffect(() => {
    getToken()
    .then(tokenResponse => {
      setToken(tokenResponse.data.access_token)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  useEffect(() => {
    getTracks('37i9dQZF1DXcBWIGoYBM5M', token)
    .then(artists => {
      setArtists({
        list: artists.data.items
      })
    })
    .catch(err => {
      console.error('HEY', err)
    })
  }, [token]) 


const listOfArtists = artists.list.map((artist) => artist)
const aboutArtist = listOfArtists.map(item => item.track.artists)

const about = [].concat(...aboutArtist)

  return (
    <div>
      <ul>{about.map((art, index) => (
        <li key={index}>{art.name}</li>
      ))}</ul>
    </div>
  )
}

export default Artists