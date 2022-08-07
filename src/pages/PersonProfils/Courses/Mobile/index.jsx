import React from 'react';
import useLogin from "../../../../hooks/useLogin";
import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField
} from "@mui/material";
import {addUserData, changeStatus, deleteUserData, getStatus, getUser, updateDataUser} from "../../../../API";
import {auth, storage, } from "../../../../firebase/firebase";
import Loading from "../../../../components/UI/loading";
import {updatePassword, updateProfile} from "firebase/auth";
import {
  directionCourses,
  coursesCity,
  coursesWorkStyle,
  ProfileCoursesChangeData,
  textArea
} from "../../../../Utils/AuthInputs";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import BottomNavigate from "../../../../components/BottomNavigate";
import MediaQuery from "react-responsive";
import cs from "../../components/MobileForm/MobileForm.module.scss";
import { updatePasswordPersod } from './../../../../firebase/firebase';

const Mobile = () => {
  const {data , isAuth} = useLogin()
  const [dataBase , setDataBase] = React.useState(null)
  const [status , setStatus] = React.useState(null)
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
      updateDataUser(isAuth.uid , {...dataBase , urlAvatar: photoSavePhoto})
      updateProfile(auth.currentUser, {
        displayName: dataBaseItems.name ? dataBaseItems.name : isAuth.displayName,
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
    getStatus(isAuth?.uid).then(res => setStatus(res.data))
  }, [])

  React.useEffect(() => {
    getUser(isAuth?.uid).then(res => {
      setDataBase(res.data)
    })} , [])

  const onSubmit = () => {
    if(dataBase){
      updateDataUser(isAuth.uid , {...dataBase , ...dataBaseItems})
      updateProfile(auth.currentUser, {
        displayName: dataBaseItems.name ? dataBaseItems.name : isAuth.displayName, photoURL: dataBaseItems.urlAvatar ? dataBaseItems.urlAvatar : isAuth.photoURL
      })
      updatePasswordPersod(dataBaseItems.password)
      if(status){
        addUserData(isAuth?.uid , {...dataBase , ...dataBaseItems , favorites: ''})
      }
    }
  }

  React.useEffect(() => {
    if(dataBase){
      changeStatus(isAuth?.uid , {...dataBase , status: status})
      if(status){
        addUserData(isAuth?.uid , {...dataBase , favorites: ''})
      }
      if(!status){
        deleteUserData(isAuth?.uid)
      }
    }
  }, [status])

  if(!dataBase) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

  return (
    <div className={cs.Mobile}>
      <div className={cs.alertErrorsBlock}>
        {uploaded === 'подождите' && <Alert severity="error">Не закрывайте страницу идет загрузка фотки</Alert>}
        {uploaded === 'успешно' && <Alert severity="success">Успешно!</Alert>}
      </div>
      <div className={cs.logo}>
        <img src={isAuth?.photoURL} alt=""/>
      </div>
      <div className={cs.container_form}>
        {ProfileCoursesChangeData.map(item => (
          <TextField
            className={cs.auth_input}
            key={item.id}
            type={item.type}
            label={item.label}
            defaultValue={dataBase[item.name]}
            variant="outlined"
            onChange={event => setDataBaseItems({...dataBaseItems , [item.name]: event.target.value})}
          />
        ))}
        <Grid display={'flex'} alignItems={'center'} justifyContent={'space-around'} >
          {progress !== 100 && progress > 0 && <CircularProgress style={{marginRight: '20px'}} disableShrink />}
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input onChange={e => setStatePhoto(e.target.files[0])} hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <Button onClick={() => submitPhoto()}>изменить</Button>
        </Grid>
        <FormControl className={cs.select} fullWidth>
          <InputLabel id="demo-simple-select-label">{directionCourses.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={''}
            label={directionCourses.label}
            onChange={e => setDataBaseItems({...dataBaseItems , directionCourses: e.target.value})}
          >
            {directionCourses.directions.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={cs.select} fullWidth>
          <InputLabel id="demo-simple-select-label">{coursesCity.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={''}
            label={coursesCity.label}
            onChange={e => setDataBaseItems({...dataBaseItems , city: e.target.value})}
          >
            {coursesCity.directions.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={cs.select} fullWidth>
          <InputLabel id="demo-simple-select-label">{coursesWorkStyle.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={''}
            label={coursesWorkStyle.label}
            onChange={e => setDataBaseItems({...dataBaseItems , coursesWorkStyle: e.target.value})}
          >
            {coursesWorkStyle.directions.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {textArea.map((item) => (
          <div className={cs.container_textArea} key={item.id}>
            <TextareaAutosize
              style={{minHeight: '50px'}}
              placeholder={item.label}
              className={cs.textArea}
              defaultValue={dataBase[item.name]}
              onChange={event => setDataBaseItems({...dataBaseItems , [item.name]: event.target.value})}
            />
          </div>
        ))}

        <Button className={cs.btn} onClick={() => onSubmit()} variant={'outlined'}>ОТПРАВИТЬ</Button>

        <Button
          style={{width: '90%'}}
          className={cs.statusBtn}
          onClick={() => {
            setStatus(item => !item)
          }}
          variant="contained" color={status ? 'error' : 'success'}>
              {status ? 'Отключить профиль' : 'Активировать профиль'}
        </Button>
      </div>
      <MediaQuery maxWidth={768}>
        <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
          <BottomNavigate/>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Mobile