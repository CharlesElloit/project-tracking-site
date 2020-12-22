import React, {useState} from "react";
import PropsTypes from "prop-types"
import '../css/header.module.css'

import {Link} from 'react-router-dom'
//Mui Staff
import Drawer from '@material-ui/core/Drawer'
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles"

//Mui Icons
import MenuIcon from '@material-ui/icons/Sort'
import SettingsIcon from '@material-ui/icons/Settings'

const useStyles = makeStyles({
  drawer: {
    width: "200px"
  },
  header_container: {
    marginTop: 10,
    // background: '#ddd',
    borderRadius: 25,
    padding: "1rem 2.5rem",
    justifyContent: "space-between",
    display: "flex",
    alignItem: 'center'
  },
  logo:{
    display: "flex",
    justifyContent: 'center'
  },
})

export default function Header(props) {
  const [drawer, setDrawer] = useState(false)
  const handleDrawer = () => {
    setDrawer(!drawer)
  }

  const classes = useStyles()
return <header className={classes.header_container}>
  <div className={classes.logo}>
   <IconButton onClick={handleDrawer}>
      <MenuIcon />
   </IconButton>
  <h3>{props.logo}</h3>
  </div>
  <ul style={styles.list}>
    <li style={styles.listItem}>
        <Link to="/about/?name=charles">About</Link>
    </li>
    <li style={styles.listItem}>User</li>
    <li style={styles.listItem}>
      <Link to={`profile/${1}`}>Profile</Link>
    </li>
    <li style={styles.listItem}>
      <SettingsIcon />
    </li>
  </ul>
  <Drawer className={classes.drawer} open={drawer}></Drawer>
  </header>;
}

Header.propsTypes = {
  logo: PropsTypes.string.isRequired  
}

const styles = {
 
  list: {
    display: "flex",
    listStyle: "none",
  },
  listItem: {
    padding: "0 .5rem"
  }
}