import * as React from 'react';
import Box from '@mui/material/Box';
import ViewPost from './ViewPost'
import MakeNew from './MakeNew'
import AppBar from '@mui/material/AppBar';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import ArticlePage from './ArticlePage';
import Toolbar from '@mui/material/Toolbar';

export default function TabComponent() {
  
  const style = {
    boxStyle: {
      background: 'linear-gradient(45deg, #FEFEFE 30%, #1976d2 90%)',
      zIndex: 2000,
      boxShadow: '0 3px 5px 2px rgba(000, 000, 000, .1)',
    },
    navStyle: {
      textDecoration: "none",
      width: "125px",
      color: "black",
      fontSize: "18px",
    }
  };

  return (
    <Box style={{ width: '100%', background: "#eaeef3" }}>
      <AppBar sx={{ borderBottom: 1, borderColor: 'divider'}} style={style.boxStyle}>
        <Toolbar>
          <br />
          <Link to="/" style={style.navStyle}>View Posts</Link>
          <br />
          <Link to="/makenew" style={style.navStyle}>Create New</Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <ViewPost />
        </Route>
        <Route path="/makenew" exact>
          <MakeNew />
        </Route>
          <Route path="/articlepage/:id" render={(props) => (
            <ArticlePage {...props}/>
          )}>  
          </Route>
      </Switch>
    </Box>
  );
}