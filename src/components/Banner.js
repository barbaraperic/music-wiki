import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
// import SearchInput from './SearchInput'
import backgroundImage from '../images/background.jpg'

const Banner = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      <div className={classes.headers}>
        <Link to="/artists" style={{ textDecoration: 'none' }}>
          <p className={classes.text}>ARTISTS</p>
        </Link>
        {/* <p>Get to know your music</p> */}
      </div>
      {/* <SearchInput placeholder="Search music" className={classes.input}/> */}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    height: '56vh',
    objectFit: 'cover',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '16px',
  },
  headers: {
    display: 'grid',
    justifyContent: 'flex-end',
    padding:' 0 30px'
  },
  text: {
    color: 'black',
    fontWeight: '600',
    letterSpacing: '1.5px',
  },
  // input: {
  //   float: 'right',
  //   marginRight: '30px',
  //   marginTop: '76px'
  // }
}))

export default Banner