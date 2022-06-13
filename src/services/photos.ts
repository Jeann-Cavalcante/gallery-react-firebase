import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 as creatId } from "uuid";

import { storage } from "../libs/firebase";
import { Photo } from "../types/Photo";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export async function Insert(file: File) {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    let randomName = creatId();
    let newFile = ref(storage, `images/${randomName}`);

    let upload = await uploadBytes(newFile, file);
    let photourl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photourl,
    } as Photo;
  } else {
    return new Error("Tipo de arquivo não permitido");
  }
}

export const DeteleItem = async (name: string) => {
  const storage = getStorage();
  const deleteName = name;

  const desertRef = ref(storage, `images/${deleteName}`);

  // Delete the file
  await deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      console.error(error);
    });
};
