import api from "./api";

export const createInquiry =
  async (data) => {

    const response =
      await api.post(
        "/inquiries",
        data
      );

    return response.data;
  };

export const getInquiries =
  async () => {

    const response =
      await api.get(
        "/inquiries"
      );

    return response.data;
  };

export const deleteInquiry =
  async (id) => {

    const response =
      await api.delete(
        `/inquiries/${id}`
      );

    return response.data;
  };