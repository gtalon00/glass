import api from "./api-config";

export const getAllUsers = async () => {
  const resp = await api.get(`/users`);
  return resp.data;
};

export const updateUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, userData);
  return resp.data;
};

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp.data;
};
