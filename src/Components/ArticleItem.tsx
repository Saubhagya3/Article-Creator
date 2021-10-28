import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Route, Link } from 'react-router-dom'

export default function ArticleItem(props: any) {
  const style = {
    textDecoration: "none",
    width: "20%",
    minWidth: "17%",
    border: "solid #78aee4",
    borderRadius: "10px",
    color: "white",
    background: "#78aee4",
    paddingTop: "5px",
    paddingBottom: "5px",
  }
  
  return (
    <Card sx={{ maxWidth: 930, minWidth: 240, margin: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.author}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.category}
        </Typography>
        <br />
        <Typography variant="body2">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Route>
          <Link to={props.link} style={style}>
            Read More
          </Link>
        </Route>
      </CardActions>
    </Card>
  );
}