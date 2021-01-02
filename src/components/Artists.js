import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"

import ArtistPage from './ArtistPage'
import { getToken, getTracks } from '../helpers'

const Artists = () => {

  const { url } = useRouteMatch()
  console.log(url)

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
const aboutArtist = listOfArtists.map(item => item.track)

const about = [].concat(...aboutArtist)

const classes = useStyles()

console.log('>>>>>', about)

  return (
    <div className={classes.container}>
      <ul className={classes.list}>{about.map((art, index) => (
        <Link
        key={index}
        className={classes.link}
        to={{
          pathname: `${url}/${(art.artists[0].id)}`,
          state: {
            profile: art
          }
        }}
        >
          <li key={index}>{art.artists[0].name}</li>
        </Link>
      ))}
      </ul>
      <div className={classes.card}>
        <h2>Artist</h2>
      </div>
      <Switch>
        <Route path={`${url}/:id`}>
          <ArtistPage />
        </Route>
      </Switch>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex'
  },
  link: {
    textDecoration: 'none', 
    color: 'black',
    '& > *': {
      padding: '8px 0',
      '&:hover': {
        fontWeight: '600',
        cursor: 'pointer'
      },
    }
  },
  list: {
    listStyle: 'none',
    marginTop: '64px',
  },
  card: {
    flexGrow: 2,
    textAlign: 'center'
  }
}))

export default Artists