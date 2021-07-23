import axios from "axios"

export const getAllRooms = async () => {
  const resp = await api.get(`/rooms`)
  return resp.data
}

export const get = async () => {
  const resp = await api.(`/`)
  return resp.data
}

export const get = async () => {
  const resp = await api.(`/`)
  return resp.data
}