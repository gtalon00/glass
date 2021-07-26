import api from "./api-config";

export const getAllMessages = async (id) => {
  const resp = await api.get(`/rooms/${id}/messages`)
  return resp.data
}

export const postMessage = async (id, messageData) => {
  console.log(id)
  console.log(messageData)
  const resp = await api.post(`/rooms/${id}/messages`, messageData)
  return resp.data
}

export const putMessage = async (id, messageData) => {
  const resp = await api.put(`/messages/${id}`, messageData)
  return resp.data
}

export const deleteMessage = async (id) => {
  const resp = await api.delete(`/messages/${id}`)
  return resp.data
}