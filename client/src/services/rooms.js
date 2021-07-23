import axios from "axios"

export const getAllRooms = async () => {
  const resp = await api.get(`/rooms`)
  return resp.data
}

export const postRoom = async (id, userData) => {
  const resp = await api.post(`/rooms/${id}`, userData)
  return resp.data
}

export const deleteRoom = async (id) => {
  const resp = await api.delete(`/rooms/${id}`)
  return resp.data
}