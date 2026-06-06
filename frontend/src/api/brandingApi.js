import api from "./api";

export const getBranding =
  async () => {

    const response =
      await api.get(
        "/branding"
      );

    return response.data;
  };

export const updateBranding =
  async (branding) => {

    const response =
      await api.put(
        "/branding",
        branding
      );

    return response.data;
  };