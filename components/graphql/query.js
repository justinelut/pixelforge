import { gql } from '@apollo/client';



export const services = gql`query{
  Services{
    docs{
      id
      name
      description
      slug
      image{
        sizes{
          card{
           width
           height
           url
          }
        }
        url
      }
      plans{
        price
      }
    }
  }
}`

export const home = gql`query{
  Homes{
    docs{
      headline
      subheadline
      image{
        url
      }
      howitworks{
        title
        description
      }
      features{
        title
        description
      }
      Faq{
        question
        answer
      }
    }
  }
}`


export const SingleService = gql`query GetServices($slug: String!) {
    Services(where: { slug: { equals: $slug } }) {
      docs {
        id
        name
        description
        slug
        image {
          sizes {
            card {
              width
              height
              url
            }
          }
          url
        }
        plans {
          name
          price
          type
          details{
          Details
        }
        }
      }
    }
  }`

export const blogPost = gql`query GetPost($slug: String!) {
    Blogs(where: { slug: { equals: $slug } }) {
      docs {
      updatedAt
      title
      content 
      image{
        url
      }
      }
      }
    }`

export const billing = gql`
  query GetBilling($userid: String!) {
    Projects(where: { createdBy: { id: { equals: $userid } } }) {
      docs {
        id
        service
        price
        amountpayed
        plan
        paymentstatus
        status
        type
        createdBy {
          id
          firstName
          lastName
        }
      }
    }
  }
`;
