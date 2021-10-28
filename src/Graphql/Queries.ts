import { gql } from '@apollo/client'

export const GET_ALL_ARTICLES = gql`
    
    query getAllArticles {
        getAllArticles {
            id
            title
            author
            country
            category
            content
            date
        }
    }
`

export const GET_ALL_CATEGORIES = gql`
    
    query getAllCategories {
        getAllCategories {
            category
        }
    }
`