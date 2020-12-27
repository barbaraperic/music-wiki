import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const MuiDropdown = (props) => {
  const {
    changed,
    selectedValue,
    options
  } = props

  const classes = useStyles()

  const dropdownChanged = (e) => {
    changed(e.target.value)
  }

  return (
    <div className={classes.container}>
      <select value={selectedValue} onChange={dropdownChanged} className={classes.dropdown}>
        <option key={0}>Select genres...</option>
        {options.map((option, index) => (
          <option key={index + 1} value={option.id}>{option.id}</option>
        ))}
      </select>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    margin: '80px'
  },
  dropdown: {
    width: '200px',
    padding: '8px 2px',
    borderRadius: '8px',
    fontFamily: 'Montserrat',
    border: 'none',
    boxShadow: '0 1px 10px #d4d4d4'
  }
}))

export default MuiDropdown