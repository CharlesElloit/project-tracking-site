import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Card from './Card'

export default function Task({classes}) {
  return (
    <>
    <Grid item sm={3} className={classes.grid}>
      <Typography>Open</Typography>
      <Card display="none" title="Bug Fix" description="Update - Customer Page "/>
      <Card display="none" title="Auto CI/CD" description="Truncated title from blog section carousel on home page"/>
      <Card display="none" />
      <Card display="none" />
  </Grid>
  
  </>
  )
}