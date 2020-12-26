import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import guitarImg from '../images/guitar.jpg'
import saxophoneImg from '../images/saxophone.jpg'
import acousticImg from '../images/acoustic.jpg'
import arrow from '../images/arrow.svg'

const Gallery = () => {
  const classes = useStyles()

  const images = [guitarImg, saxophoneImg, acousticImg]

  // axios.get('/login').then(res => console.log('>>', res))

  return (
    <div>
      <p>Most search artists</p>
      <div className={classes.header}>
        <h2>66+ artists for you to discover</h2>
        <div style={{ display: 'flex'}}>
          <p style={{ fontSize: '12px' }}>SEE MORE</p>
          <img src={arrow} alt="arrow" style={{ cursor: 'pointer'}}/>
        </div>
      </div>
      <div style={{ display: 'flex'}}>
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
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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