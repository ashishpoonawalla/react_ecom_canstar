import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JiOThlN2ZmYjhiMDkxYjhkOGFhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzY5OTgzNCwiZXhwIjoxNjU3OTU5MDM0fQ.chn_acSkchstpPY8uiXDXCK56000lODvkzlbN76KJWU"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${ TOKEN }` }
});