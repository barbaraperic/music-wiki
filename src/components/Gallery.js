import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Loading from './Loading'

const Gallery = ({tracks}) => {

  const classes = useStyles()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if(!tracks) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <Carousel responsive={responsive} className={classes.container}>
        {tracks.listOfTracksFromAPI.map((tracks, index) => (
          <div className={classes.item} key={index}>
            <Link
              to={`/artist`} 
            >
              <img 
                src={tracks.track.album.images[0].url} 
                alt="album_image"
                className={classes.image}
              />
              <p key={index} className={classes.listItem}>{tracks.track.name}</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    margin: '40px 0'
  },
  image: {
    width: '275px'
  },
  item: {
    position: 'relative'
  },
  listItem: {
    position: 'absolute',
    bottom: '5px',
    left: '1px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '4px',
    maxWidth: '266px'
  }
}))





export default Gallery