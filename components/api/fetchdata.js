import axios from 'axios'

export const fetcher = (path) => axios.get(path, {
    headers: {
        "Authorization": `account API-Key ${process.env.PAYLOAD_API_KEY}`
    }
}).then(res => res)


export const sender = (path) => axios.post(path, {
    headers: {
        "Authorization": `account API-Key ${process.env.PAYLOAD_API_KEY}`
    }
})

export const adminfetcher = (path) => axios.get(path, {
    headers: {
        "Authorization": `account API-Key ${process.env.PAYLOAD_API_KEY}`
    }
}).then(res => res)

export const getdata = (path) => axios.get(path, {
   
}).then(res => res)


