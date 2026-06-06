import api from "./api";

export const getProducts =
  async () => {

    const response =
      await api.get(
        "/products"
      );

    return response.data;
  };

export const createProduct =
  async (product) => {

    const response =
      await api.post(
        "/products",
        product
      );

    return response.data;
  };

export const deleteProduct =
  async (id) => {

    const response =
      await api.delete(
        `/products/${id}`
      );

    return response.data;
  };

export const uploadProductImage =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await api.post(
        "/upload/product-image",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };