
import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://justinedev.verixr.com/api/graphql',
});


const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `account API-Key ${process.env.PAYLOAD_API_KEY}`,
        }
    }
});


export const serverClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});