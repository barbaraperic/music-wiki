import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const Button = (props) => {
  const {
    variant,
    children,
    type,
    className
  } = props

  const classes = useStyles();

  return (
    <MuiButton
      variant={variant}
      type={type}
      className={`${classes.button} ${className}`}
    >
      {children}
    </MuiButton>
  );
}

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#F5BF45',
    width: '250px',
    margin: '16px',
    borderRadius: '16px',
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    letterSpacing: '2px',
    '&:hover': {
      backgroundColor: '#C59535'
    }
  },
}));

Button.defaultProps = {
  variant: "contained"
}

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Button
