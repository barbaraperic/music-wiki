import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Gallery = ({tracks}) => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {tracks.listOfTracksFromAPI.map((tracks, index) => (
          <div className={classes.item}>
            <a 
              href={tracks.track.external_urls.spotify} 
              style={{ textDecoration: 'none'}}
              target="_blank"
              rel="noopener noreferrer"
            >
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
    bottom: '5px',
    left: '0px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '4px',
    maxWidth: '266px'
  }
}))


export default Gallery