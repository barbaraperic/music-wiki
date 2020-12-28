import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Credentials } from './Credentials'
import Dropdown from './Dropdown'
import Button from './Button'

const Gallery = () => {
  const [token, setToken] = useState('')
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});

  const classes = useStyles()

  const spotify = Credentials()

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {   
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });
      
    });

  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 

  const genreChanged = val => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    })
    
    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
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

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }

  console.log('tracks',tracks)

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
        <Button type="submit">Submit</Button>
      </div>
      <div className={classes.container}>
        <ul className={classes.list}>
          {tracks.listOfTracksFromAPI.map((tracks, index) => (
            <div className={classes.item}>
              <a href={tracks.track.external_urls.spotify} style={{ textDecoration: 'none'}}>
                <img 
                  src={tracks.track.album.images[0].url} 
                  alt="album_image"
                  className={classes.image}
                />
                <li key={index} className={classes.listItem}>{tracks.track.name}</li>
              </a>
            </div>
          ))}
        </ul>
      </div>
    </form>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    marginTop: '40px'
  },
  image: {
    width: '275px'
  },
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '8px',
    rowGap: '8px',
    listStyleType: 'none',
    padding: '0'
  },
  item: {
    position: 'relative'
  },
  listItem: {
    position: 'absolute',
    bottom: '16px',
    left: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '4px'
  }
}))

export default Gallery