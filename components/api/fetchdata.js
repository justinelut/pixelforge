import axios from 'axios'

export const papikey = '24d76c42-cfa8-431f-bda7-6a8773e30880'
export const gqlapi = 'https://justinedev.verixr.com/api/graphql'
export const fetcher = (path) => axios.get(path, {
    headers: {
        "Authorization": `account API-Key ${papikey}`
    }
}).then(res => res)


export const sender = (path) => axios.post(path, {
    headers: {
        "Authorization": `account API-Key ${papikey}`
    }
})

export const adminfetcher = (path) => axios.get(path, {
    headers: {
        "Authorization": `account API-Key ${papikey}`
    }
}).then(res => res)

export const getdata = (path) => axios.get(path, {
   
}).then(res => res)


