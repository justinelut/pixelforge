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
  }
}
}`