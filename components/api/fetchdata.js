import axios from 'axios'

export const fetcher = (path) => axios.get(path, {
    headers: {
        "Authorization": "account API-Key 24d76c42-cfa8-431f-bda7-6a8773e30880"
    }
}).then(res => res)


export const sender = (path) => axios.post(path, {
    headers: {
        "Authorization": "account API-Key 24d76c42-cfa8-431f-bda7-6a8773e30880"
    }
})

export const adminfetcher = (path) => axios.get(path, {
    headers: {
        "Authorization": "account API-Key 24d76c42-cfa8-431f-bda7-6a8773e30880"
    }
}).then(res => res)

export const getdata = (path) => axios.get(path, {
   
}).then(res => res)


