import React, {useState, useEffect} from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Card from './Card'

const data = [
  {id: 1, title: "Bug Fix", description: "Update - Customer Page"},
  {id: 2, title: "Auto CI/CD", description: "Truncated title from blog section carousel on home page"}
]

const useStyles = makeStyles({
  grid:{
    padding: "0 .5rem",
  },
})


export default function Task() {
const [tasks, setTasks] = useState([])
const classes = useStyles()

useEffect(() => {
  setTasks(data)
}, [])


  const handleDelete = (id) => {
    const filteredTask = data.filter(task => task.id !== id)
    setTasks(filteredTask)
  }
  
  const onDragStart = (e, id)=> {
    e.dataTransfer.setData("id", id)
  }

  return (
    <Grid item sm={3} className={classes.grid}>
      <Typography>Closed</Typography>
      {tasks.map(task => (
        <Card 
          onDragStart={(e)=> onDragStart(e, task.id)}
          draggable
          onDelete={() => handleDelete(task.id)}
          key={task.id} 
          title={task.title} 
          description={task.description}/>
      ))}
    </Grid>
  )
}