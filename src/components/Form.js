import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dropdown from './Dropdown'
import Button from './Button'
import Gallery from './Gallery'

import { getToken, getGenres, getPlaylist, getTracks } from '../helpers'

const Form = () => {
  const [token, setToken] = useState('')
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});

  const classes = useStyles()

  useEffect(() => {

    getToken()
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);
    })

    getGenres(token)
      .then (genreResponse => {   
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });

  }, [genres.selectedGenre]);

  const genreChanged = val => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    })
    
    getPlaylist(val, token)
    .then(playlistResponse => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items
      })
    });
  }

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    getTracks(playlist.selectedPlaylist, token)
      .then(tracksResponse => {
        setTracks({
          selectedTrack: tracks.selectedTrack,
          listOfTracksFromAPI: tracksResponse.data.items
        })
    });
  }

  console.log('tracks', tracks)

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.container}>
        <Dropdown
          label="Genre  "
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />
        <Dropdown
          label="Playlist  "
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged}
        />
        <Button type="submit">Search Tracks</Button>
      </div>
      <Gallery tracks={tracks}/>
    </form>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    marginTop: '40px'
  },
}))

export default Form