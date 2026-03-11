import firebaseApp from "@/config/firebase-config";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const UploadImageToFirebaseAndReturnUrl = async (file: File) => {
  try {
    const storage = getStorage(firebaseApp);

    const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);

    const snapshot = await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;

  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};