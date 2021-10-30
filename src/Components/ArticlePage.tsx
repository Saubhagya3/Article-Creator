import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { GET_ALL_ARTICLES } from '../Graphql/Queries'
import { useQuery } from '@apollo/client'
import DrawerComponent from './DrawerComponent'
import { Route, Link } from 'react-router-dom'

export default function ArticlePage(props: any) {
    const { data } = useQuery(GET_ALL_ARTICLES)
    // const article = data.getAllArticles.find((art: number) => {
    //     return (parseInt(match.params.artId) === art.id)
    // })
    const style = {
        textDecoration: "none",
        width: "15%",
        minWidth: "4%",
        border: "solid #78aee4",
        borderRadius: "10px",
        color: "white",
        background: "#78aee4",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginTop: "30px",
        float: "left" as "left"
    }
    let getId = props.match.params.id
    const getData = data.getAllArticles[getId - 1]
    return(
        <Box sx={{ display: 'flex' }} style={{ padding: "0", margin: "0", marginTop: "50px"}}>
      
            <CssBaseline />
            <Box component="main" sx={{ p: 3, width: "100%" }}>
                <Route>
                    <Link to="/" style={style}>
                        Back
                    </Link>
                </Route>
                <Container maxWidth="sm">
                    <Box  style={{ padding: "15px",}} sx={{ bgcolor: '#ffffff', height: '100vh' }}>
                        <Typography variant="h4" component="div">
                            {getData.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {getData.author} | {getData.category}
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="body1">
                            {getData.content}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
