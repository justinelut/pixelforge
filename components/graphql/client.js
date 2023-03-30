import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

let client = null;


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



export const getClient = () => {
    // create a new client if there's no existing one
    // or if we are running on the server.
    if (!client || typeof window === "undefined") {
        client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
        });
    }

    return client;
};