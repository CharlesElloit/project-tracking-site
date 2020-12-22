import React from "react"

import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import ArrowForward from "@material-ui/icons/ArrowForward"
import IconButton from '@material-ui/core/IconButton'

import DeleteIcon from '@material-ui/icons/DeleteOutlineTwoTone'

export default function CardIssues({title, description, display, onDelete }) {

const useStyles = makeStyles({
  card: {
    border: "1px solid #ddd",
    margin: ".5rem 0",
    maxHeight: 200,
    height: 100
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  description: {
    margin: "0 .5rem",
    fontSize: ".6rem"
  },
  title: {
    fontSize: ".8rem",
    color: "#093438",
    margin: ".2rem .6rem"
  },
  section: {
    display: "flex",
    margin: "0 .5rem"
  },
  barsContaner: {
    display: "flex",
    alignItems: "center",
    width: "20%"

  },
  bar1: {
    width: "7px",
    height: "23px",
    margin: "0 .02rem",
    background: "#38a0ab",
    border: "1px solid #ddd",
    borderRadius: 3
  },
  bar2: {
    width: "7px",
    height: "27px",
    margin: "0 .02rem",
    background: "#1f7179",
    border: "1px solid #ddd",
    borderRadius: 3

  },
  bar3: {
    width: "7px",
    height: "29px",
    margin: "0 .02rem",
    background: "#13565d",
    border: "1px solid #ddd",
    borderRadius: 3

  },
  bar4: {
    width: "7px",
    height: "31px",
    margin: "0 .02rem",
    background: "#093438",
    border: "1px solid #ddd",
    borderRadius: 3

  },
  deleteIcon: {
    display: display,
    fontSize: "1.3rem",
    color: "red"

  },
  deleteContainer: {
    display: "flex",
    alignItems: "center"
  },
  timestamp: {
    fontSize: ".5rem",
    // marginRight: ".5rem"
  }

})

  const classes = useStyles()
  return(
    <Card className={classes.card} draggable >
      <div className={classes.cardHeader}>
        <Typography className={classes.title} variant="body1">{title}</Typography>
        <div className={classes.deleteContainer}>
          <span className={classes.timestamp}>12 hour ago</span>
          <IconButton onClick={onDelete} className={classes.deleteIcon}>
           <DeleteIcon className={classes.deleteIcon}/>
          </IconButton>          
        </div>
      </div>
    <div className={classes.section}>
       <div className={classes.barsContaner}>
         <div className={classes.bar1}></div>
         <div className={classes.bar2}></div>
         <div className={classes.bar3}></div>
         <div className={classes.bar4}></div>
       </div>
      <Typography className={classes.description} variant="caption">{description}</Typography>
    </div>
        <IconButton>
          <ArrowForward />
        </IconButton>
    </Card>
  )
}