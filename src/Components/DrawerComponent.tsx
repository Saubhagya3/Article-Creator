import React from 'react'
import {useState} from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { GET_ALL_ARTICLES } from '../Graphql/Queries'
import { useQuery } from '@apollo/client'
import { Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function DrawerComponent() {
    const { data } = useQuery(GET_ALL_ARTICLES)
    const [ limit, setLimit ] = useState(5)
    const drawerWidth = 240;

    const style = {
        textDecoration: "none",
        border: "solid #78aee4",
        borderRadius: "10px",
        color: "white",
        background: "#78aee4",
        paddingTop: "5px",
        paddingBottom: "5px",
        textAlign: "center" as "center"
    }
    return(
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box>
            <List>
                <ListItem button sx={{ fontSize: 13 }} style={{background: "#78aee4"}}>
                    <ListItemText primary="Other Articles"/>
                </ListItem>
                {data && (data.getAllArticles
                    .slice(0, limit ? limit : data.getAllArticles.length)
                    .reverse()
                    .map((article: any) => (
                        <Route key={article.id}>
                            <Link to={`/articlepage/${article.id}`} style={{textDecoration: "none", color: "black"}}
                            // {`/${props.id}`}
                            >
                                <ListItem button sx={{ fontSize: 13 }} >
                                    <ListItemText primary={article.title}/>
                                </ListItem>
                            </Link>
                        </Route>
                )))}
            </List>
            <Button 
                variant="contained" 
                type="submit"
                onClick={() => setLimit(limit+5)}
            >
                More
            </Button>
            </Box>
        </Drawer>
    )
}