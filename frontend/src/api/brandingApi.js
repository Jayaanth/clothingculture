import api from "./api";

export const getBranding =
  async () =>
    (
      await api.get(
        "/branding"
      )
    ).data;

export const updateBranding =
  async (data) =>
    (
      await api.put(
        "/branding",
        data
      )
    ).data;

export const uploadLogo =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    return (
      await api.post(
        "/upload/logo",
        formData,
        {
          headers:{
            "Content-Type":
            "multipart/form-data"
          }
        }
      )
    ).data;
  };