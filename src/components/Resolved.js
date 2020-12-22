import React from 'react'

import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

import Card from './Card'

const useStyles = makeStyles({
  grid:{
    padding: "0 .5rem",
  },
})

export default function Task() {
  const classes = useStyles()
  return (
    <Grid item sm={3} className={classes.grid}>
      <Typography>Resolved</Typography>
      <Card display="none" title="Auto CI/CD" description="Truncated title from blog section carousel on home page"/>
      <Card display="none"/>
    </Grid>
  )
}