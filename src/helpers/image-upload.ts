export const UploadImageToFirebaseAndReturnUrl = async (file: File) => {
  try {

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      throw new Error("Image upload failed");
    }

    const data = await res.json();

    return data.url;

  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};