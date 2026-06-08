// src/utils/fileUrl.js

export function fileUrl(path) {

  return (
    import.meta.env.VITE_API_BASE
      .replace("/api", "") +
    path
  );

}