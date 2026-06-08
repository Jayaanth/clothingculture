import api from "./api";

export const getProducts = async () =>
  (await api.get("/products")).data;

export const createProduct = async (data) =>
  (await api.post("/products", data)).data;

export const deleteProduct = async (id) =>
  (await api.delete(`/products/${id}`)).data;