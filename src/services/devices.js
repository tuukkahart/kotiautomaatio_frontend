import axios from "axios"
const baseUrl = 'http://localhost:3001/api/devices'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createNew = async deviceObject => {
    const response = await axios.post(baseUrl, deviceObject)
    return response.data
}

const remove = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
  }

export default {getAll, createNew, remove}