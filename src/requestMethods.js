import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWEwYTMwMTE5ZmM2MmMwNTE1Y2UwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjIzNTg1NCwiZXhwIjoxNjQ2NDk1MDU0fQ.yWBAqDzozFm-YpoXIliGf63pV6f_JHcbziP_AH_zrMI"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
}) 