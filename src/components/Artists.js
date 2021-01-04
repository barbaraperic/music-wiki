import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"

import ArtistPage from './ArtistPage'
import { getToken, getTracks } from '../helpers'
import { ThemeConsumer } from '../contexs/theme'

const Artists = () => {

  const { url } = useRouteMatch()

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

  return (
    <ThemeConsumer>
      {( {theme} ) => (
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
            <h2 style={{ letterSpacing: '1.5px' }}>Artists</h2>
          </div>
          <Switch>
            <Route path={`${url}/:id`}>
              <ArtistPage />
            </Route>
          </Switch>
        </div>
      )}
    </ThemeConsumer>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex'
  },
  containerDark: {
    display: 'flex',
    backgroundColor: 'black'
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