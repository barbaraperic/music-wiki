import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      <p>Your playlist</p>
      <small>Barbara Peric 2020</small>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5BF45',
    padding: '0 16px',
    borderRadius: '16px 16px 0px 0px',
  }
}))

export default Footer