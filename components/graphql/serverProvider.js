
import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://justinedev.verixr.com/api/graphql',
});

const authLink = setContext((_) => {
  
    return {
        headers: {
            "Authorization": "account API-Key 24d76c42-cfa8-431f-bda7-6a8773e30880"
        }
    }
});


export const serverClient = new ApolloClient({
    link: authLink.concat(httpLink),
    uri: 'https://justinedev.verixr.com/api/graphql',
    cache: new InMemoryCache(),
});