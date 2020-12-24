import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

//prop types & default types missing

const SearchInput = ({ placeholder, className, onChange }) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={`${classes.root} ${className}`}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    borderRadius: '16px',
    '& .MuiInputBase-input': {
      fontFamily: 'Montserrat',
      fontWeight: 600
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default SearchInput