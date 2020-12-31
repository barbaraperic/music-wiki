import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

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

console.log(artists)

const classes = useStyles()

  return (
    <div className={classes.container}>
      <ul className={classes.list}>{about.map((art, index) => (
        <li key={index}>{art.name}</li>
      ))}</ul>
      <div className={classes.card}>
        <p>Artist</p>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex'
  },
  list: {
    listStyle: 'none',
    marginTop: '64px',
    '& > *': {
      padding: '8px 0',
      '&:hover': {
        fontWeight: '600',
        cursor: 'pointer'
      },
    }
  },
  card: {
    flexGrow: 2,
    textAlign: 'center'
  }
}))

export default Artists