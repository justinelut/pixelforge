
import { ApolloClient, InMemoryCache} from '@apollo/client';



export const serverClient = new ApolloClient({
    uri: 'https://justinedev.verixr.com/api/graphql',
    cache: new InMemoryCache(),
});