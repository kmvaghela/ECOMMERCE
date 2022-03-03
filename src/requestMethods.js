import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWEwYTMwMTE5ZmM2MmMwNTE1Y2UwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjMwNzE0OSwiZXhwIjoxNjQ2NTY2MzQ5fQ.XujBBilHZdySlNeqN3KdtMIiCVFe30ONPE-7-aY5bDc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
}) 