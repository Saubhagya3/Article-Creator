import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { GET_ALL_ARTICLES } from '../Graphql/Queries'
import { useQuery } from '@apollo/client'
import DrawerComponent from './DrawerComponent'

export default function ArticlePage(props: any) {
    const { data } = useQuery(GET_ALL_ARTICLES)
    // const article = data.getAllArticles.find((art: number) => {
    //     return (parseInt(match.params.artId) === art.id)
    // })
    let getId = props.match.params.id
    const getData = data.getAllArticles[getId - 1]
    return(
        <Box sx={{ display: 'flex' }} style={{ padding: "0", margin: "0", marginTop: "50px"}}>
      
            <CssBaseline />
            <DrawerComponent />
            <Box component="main" sx={{ p: 3, width: "100%" }}>
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