
import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {gqlapi, papikey} from '../api/fetchdata'

const httpLink = createHttpLink({
    uri: gqlapi,
});


const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `account API-Key ${papikey}`,
        }
    }
});


export const serverClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});