import axios from 'axios';

export async function callBackend(path, data) {
    const response = await axios.get(`${path}`, {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
        },
        data: JSON.stringify(data)
    })
    return await response
}