import React from 'react'
import { Switch, Route, Link, useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Artists from './Artists'

const Gallery = ({tracks}) => {

  const params = useParams()
  
  console.log('params', params)

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

  tracks.listOfTracksFromAPI.map(track => console.log(track.track.id))

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
      <Switch>
        <Route to=''>
          <Artists />
        </Route>
      </Switch>
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