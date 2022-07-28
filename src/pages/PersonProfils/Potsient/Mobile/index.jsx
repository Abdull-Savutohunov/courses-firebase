import React from 'react';
import useLogin from "../../../../hooks/useLogin";
import {useForm} from "react-hook-form";
import {updateDataUser} from "../../../../API";
import {auth, storage, updatePasswordPersod} from "../../../../firebase/firebase";
import {Alert, Button, Grid} from "@mui/material";
import Loading from "../../../../components/UI/loading";
import {updateProfile} from "firebase/auth";
import {CoursesProfile, StudentProfile} from "../../../../Utils/Profile/Profile";
import Inputs from "../../../../components/UI/Inputs";
import BottomNavigate from "../../../../components/BottomNavigate";
import MediaQuery from "react-responsive";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import cs from './Mobile.module.scss'

const Mobile = () => {
  const {data , isAuth} = useLogin()
  const [dataBase , setDataBase] = React.useState(null)
  let defaultValues = {}

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

  React.useEffect(() => {
    setDataBase(data)
  }, [data])

  const {control , reset , handleSubmit , register , formState: {
    errors
  }} = useForm()

  const onSubmit = value => {
    console.log(value)
    updateDataUser(isAuth.uid , {...data , ...value})
    updateProfile(auth.currentUser, {
      displayName: value.name ? value.name : isAuth.displayName,
      photoURL: photoSavePhoto
    })
    updatePasswordPersod(value.password)
  }

  const ListBase = 'Student' === 'Courses' ? CoursesProfile : StudentProfile

  if(!dataBase) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

  return (
    <React.Fragment>
        <div className={cs.Mobile}>
          <div className={cs.alertErrorsBlock}>
            {uploaded === 'подождите' && <Alert severity="error">Не закрывайте страницу идет загрузка фотки</Alert>}
            {uploaded === 'успешно' && <Alert severity="success">Успешно!</Alert>}
          </div>
          <div className={cs.mobile_photo}>
            <img src={isAuth.photoURL} alt=""/>
          </div>
          <div className={cs.cards}>
            <div className={cs.cards_header}>
              <h1>Мой профиль</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={cs.cards_body}>
              {
                ListBase.map(item =>
                  <Inputs
                    register={register}
                    reset={reset}
                    dataBase={dataBase[item.name]}
                    errors={errors}
                    key={item.id}
                    cs={cs}
                    type={item.type}
                    control={control}
                    name={item.name}
                    messages={item.messages}
                    defaultValues={defaultValues}
                    label={item.label}
                  />
                )
              }
              <Grid display={'flex'} alignItems={'center'} justifyContent={'space-around'} >
                {progress !== 100 && progress > 0 && <CircularProgress style={{marginRight: '20px'}} disableShrink />}
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input onChange={e => setStatePhoto(e.target.files[0])} hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
                <Button onClick={() => submitPhoto()}>изменить</Button>
              </Grid>
              <Button
                variant="outlined"
                size="medium"
                type={'submit'}
              >
                submit
              </Button>
            </form>
          </div>
        </div>
        <MediaQuery maxWidth={768}>
          <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
            <BottomNavigate/>
          </div>
        </MediaQuery>
    </React.Fragment>
  );
};

export default Mobile;