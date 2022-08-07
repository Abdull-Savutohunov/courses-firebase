import React from 'react';
import {ProfilsStudent} from "../../../../Utils/Profile/Profile";
import {Alert, Button, Grid, TextField} from "@mui/material";
import {ProfileStudentChangeData} from "../../../../Utils/AuthInputs";
import useLogin from "../../../../hooks/useLogin";
import {updateDataUser} from "../../../../API";
import {auth, storage, updatePasswordPersod} from "../../../../firebase/firebase";
import Loading from "../../../../components/UI/loading";
import {updateProfile} from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import cs from './Laptop.module.scss'

const Laptop = () => {
  const {data , isAuth} = useLogin()

  const [dataBase , setDataBase] = React.useState(null)
  const [dataBaseItems , setDataBaseItems] = React.useState({})

  const [progress , setProgress] = React.useState(null)
  const [photoSavePhoto , setSavePhotoURl] = React.useState(null)
  const [statePhoto , setStatePhoto] = React.useState(null)
  const [uploaded , setUploaded] = React.useState(null)

  const submitPhoto = () => {
    setUploaded('подождите')
    uploadFiles(statePhoto)
  }

  React.useEffect(() => {
    if(photoSavePhoto){
      console.log(photoSavePhoto)
      updateDataUser(isAuth.uid , {...data , urlAvatar: photoSavePhoto})
      updateProfile(auth.currentUser, {
        displayName: isAuth.displayName,
        photoURL: photoSavePhoto
      })
    }
  }, [photoSavePhoto])

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
          setUploaded('успешно')
          setTimeout(() => {
            setUploaded(null)
          }, 5000)
        });
      }
    );
  };

  React.useEffect(() => {setDataBase(data)}, [data])

  const onSubmit = () => {
    updateDataUser(isAuth.uid , {...data , ...dataBaseItems})
    updateProfile(auth.currentUser, {
      displayName: dataBaseItems.name ? dataBaseItems.name : isAuth.displayName, photoURL: dataBaseItems.urlAvatar ? dataBaseItems.urlAvatar : isAuth.photoURL
    })
    updatePasswordPersod(dataBaseItems.password)
  }

  if(!dataBase) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

  return (
    <div className={cs.Laptop}>
      <div className={cs.alertErrorsBlock}>
        {uploaded === 'подождите' && <Alert severity="error">Не закрывайте страницу идет загрузка фотки</Alert>}
        {uploaded === 'успешно' && <Alert severity="success">Успешно!</Alert>}
      </div>
      <div className={cs.avatar_container}>
        <div className={cs.avatar}>
          <div className={cs.logo}>
            <img src={dataBase?.urlAvatar} alt=""/>
          </div>
          <div className={cs.contacts}>
            <div className={cs.contacts_container}>
              {ProfilsStudent.map(item => <p key={item.key}><span>{item.label}</span><span className={cs.span}>{dataBase[item.key]}</span></p>)}
            </div>
          </div>
        </div>
      </div>
      <form className={cs.container_form}>
        {ProfileStudentChangeData.map(item => (
          <TextField
            className={cs.auth_input}
            defaultValue={data[item.name]}
            key={item.id}
            type={item.type}
            label={item.label}
            variant="outlined"
            onChange={event => setDataBaseItems({...dataBaseItems , [item.name]: event.target.value})}
          />
        ))}

        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} style={{marginBottom:'20px'}}>
          {progress !== 100 && progress > 0 && <CircularProgress style={{marginRight: '20px'}} disableShrink />}
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input onChange={e => setStatePhoto(e.target.files[0])} hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <Button onClick={() => submitPhoto()}>изменить</Button>
        </Grid>

        <Button className={cs.btn} onClick={() => onSubmit()} variant={'outlined'}>ОТПРАВИТЬ</Button>

      </form>
    </div>
  );
};

export default Laptop;