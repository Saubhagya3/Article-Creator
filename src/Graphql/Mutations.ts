import { gql } from '@apollo/client'

export const CREATE_ARTICLE = gql`
    
    mutation createArticle(
        $title: String! 
        $author: String! 
        $country: String! 
        $category: String! 
        $content: String! 
        $date: String!
        ) {
        createArticle(
            title: $title 
            author: $author 
            country: $country
            category: $category
            content: $content
            date: $date
        ) {
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

export const CREATE_CATEGORY = gql`
    
    mutation createCategory($category: String! ) {
        createCategory(
            category: $category
        ) {
            id
            category
        }
    }
`