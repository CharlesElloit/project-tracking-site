import React from "react";
import Header from "../components/Header";
import {Link} from 'react-router-dom'
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from '@material-ui/core/Grid'
import Task from "../components/Tasks";
import { Typography } from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard'
import ProjectIcon from '@material-ui/icons/List'
import  SettingsIcon from "@material-ui/icons/Settings";
import ListIcon from "@material-ui/icons/ListAlt";
import Closed from '../components/Closed'
import Resolved from '../components/Resolved'
import InProgress from '../components/InProgress'

const useStyles = makeStyles({
  card: {
    
  },
  container: {
    display:  "flex"
  },
  content: {
    display: "flex",
    width: '80%',
    margin: '0 auto', 
    paddingTop: '4%',
    marginLeft: "17%"
  },
  
  grid:{
    padding: "0 .5rem",
  },

  sidebar: {
    width: 200,
    paddingTop: "4%",
    height: "100vh",
    margin: ".5rem",
    background: "#f7f7f7",
    position: "fixed"
  },
  sidebarLinks: {
    display: "flex",
    margin: ".5rem 0",
    alignItems: "center"
  }
})

export default function HomeScreen() {
  const classes = useStyles()
  return (
    <div>
      <Header logo="React" />
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <div>
            <Typography>Project Name</Typography>
          </div>
          <div className={classes.sidebarLinks}>
            <DashboardIcon />
            <Typography variant="caption">Dashboard</Typography>
          </div>
          <div className={classes.sidebarLinks}>
            <ProjectIcon />
            <Typography variant="caption" component={Link} to="/projects">Projects</Typography>
          </div>
          <div className={classes.sidebarLinks}>
            <ListIcon />
            <Typography variant="caption">Issues</Typography>
          </div>
          <div className={classes.sidebarLinks}>
            <SettingsIcon />
            <Typography variant="caption">Settings</Typography>
          </div>
        </div>
        <div className={classes.content}>
          <Grid container >
            <Task classes={classes} title="Open"/>
            <InProgress />
            <Resolved />
            <Closed />
          </Grid>
        </div>
      </div>
    </div>
  );
}
