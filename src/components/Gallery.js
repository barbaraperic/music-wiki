import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import guitarImg from '../images/guitar.jpg'
import saxophoneImg from '../images/saxophone.jpg'
import acousticImg from '../images/acoustic.jpg'

const Gallery = () => {
  const classes = useStyles()

  const images = [guitarImg, saxophoneImg, acousticImg]

  return (
    <div>
      <p>Most search artists</p>
      <h2>66+ artists for you to discover</h2>
      <div className={classes.images}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="musician"
            className={classes.image}
            style={{width: '200px'}}
          />
        ))}
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  images: {
    display: 'flex',
  },
  image: {
    objectFit: 'cover',
    margin: '23px',
    borderRadius: '16px',
    width: '200px',
    height: '200px'
  }
}))

export default Gallery