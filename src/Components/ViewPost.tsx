import Box from '@mui/material/Box';
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { GET_ALL_ARTICLES } from '../Graphql/Queries'
import { useQuery } from '@apollo/client'
import ArticleItem from './ArticleItem'
import DrawerComponent from './DrawerComponent'
import { Button } from '@mui/material';

export default function ViewPost() {
  const { data } = useQuery(GET_ALL_ARTICLES)
  const [ limit, setLimit ] = useState(10)

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
    textAlign: "center" as "center",
    fontSize: "18px"
  }
  return (
    <Box sx={{ display: 'flex' }} style={{ padding: "0", margin: "0", marginTop: "50px" }}>
      
      <CssBaseline />
      <DrawerComponent />
      <Box component="main" sx={{ p: 3, width: "100%" }}>
        {data && (data.getAllArticles
          .slice(0, limit ? limit : data.getAllArticles.length)
          .sort((a: any, b: any) => {
            return (+new Date(b.date) - +new Date(a.date))
          })
          .map((article: any) => {
            return(
              <ArticleItem 
                key={article.id}
                title={article.title} 
                author={article.author} 
                category={article.category} 
                content={article.content}
                link={`/articlepage/${article.id}`}
              />
            )
          }))}
        <Button 
            variant="contained" 
            type="submit"
            onClick={() => setLimit(limit+5)}
        >
            More
        </Button>
      </Box>
      
    </Box>
  );
}
