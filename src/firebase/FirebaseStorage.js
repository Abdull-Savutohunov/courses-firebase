import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "./firebase";

function uploadFiles (file) {
  if (!file) return;
  const sotrageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(sotrageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(prog);
    },
    (error) => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setSavePhotoURl(downloadURL)
        console.log(downloadURL)
      });
    }
  );
};