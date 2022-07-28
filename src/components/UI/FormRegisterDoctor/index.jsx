import React from 'react';
import AuthInputs from "../AuthInputs";
import FormSection from "../FormSection";
import {Button, Grid} from "@mui/material";
import {useForm} from "react-hook-form";
import {
  directionCourses,
  coursesCity,
  coursesWorkStyle,
  RegisterCourses,
  textArea
} from "../../../Utils/AuthInputs";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../../firebase/firebase";
import {createNewUser} from "../../../API";
import TextAreaForm from "../TextAreaForm";
import useLogin from "../../../hooks/useLogin";
// import CircularProgress from "@mui/material/CircularProgress";
// import {getDownloadURL, ref, uploadBytesResumable} from '@firebase/storage'
// import {storage} from "../../../firebase/firebase";

const FormRegisterCourses = ({cs}) => {
  const {setUpdateData} = useLogin()
  const navigate = useNavigate()
  const [courses, setCourses] = React.useState('');
  const [courses2, setCourses2] = React.useState('');
  const [courses3, setCourses3] = React.useState('');
  const {control , handleSubmit , formState: {errors}} = useForm()

  const [passwordValue , setPasswordValue] = React.useState(false)

  const [directionCoursesObject , setDirectionCoursesValue] = React.useState(null)

  const handleChange = (event) => {
    filterListBlock(event.target.value)
    setCourses(event.target.value);
  };
  const handleChange2 = (event) => {setCourses2(event.target.value);};
  const handleChange3 = (event) => {setCourses3(event.target.value);};

  const handleNewUser = (data, userId) => {
    createNewUser(data, userId).then(res => {
      setUpdateData(item => !item)
      navigate('/')
    })
  }

  const filterListBlock = (value) => {
    const base = directionCourses?.directions.filter((item) => item.value === value)
    setDirectionCoursesValue(...base)
  }

  const onSubmit = async (data , e) => {
    e.preventDefault()
    const base = {...data , directionCoursesRu: directionCoursesObject.title}
    if(base.password.length > 8){
      const res = await createUserWithEmailAndPassword(auth, base.email, base.password)
      await updateProfile(res.user, {
        displayName: base.username,
        photoURL:  null,
      })
      setCourses('')
      setCourses2('')
      setCourses3('')
      e.target.reset()
      res && handleNewUser({...base , people: 'Courses' , status: false , urlAvatar: null , favorites: {key: 'value'}}, res.user.uid)
      navigate('/')
    }else {
      setPasswordValue(true)
    }
  }

  return (
    <form className={cs.form} onSubmit={handleSubmit(onSubmit)}>
      {passwordValue && (<p style={{textAlign: 'center' , paddingBottom: '10px', color:'red'}}>Пароль должен быть не менее 8 символов!</p>)}
      {RegisterCourses.map(({id , name , messages , label , type}) => (
        <AuthInputs className={cs.auth_input} type={type} messages={messages} control={control} cs={cs} name={name} errors={errors} label={label} key={id}/>
      ))}
      <div className={cs.select}>
        <FormSection directionCourses={directionCourses} cs={cs} className={cs.form_section} errors={errors} handleChange={handleChange} value={courses} control={control}/>
      </div>
      <div className={cs.select}>
        <FormSection directionCourses={coursesCity} cs={cs} className={cs.form_section} errors={errors} handleChange={handleChange2} value={courses2} control={control}/>
      </div>
      <div className={cs.select}>
        <FormSection directionCourses={coursesWorkStyle} cs={cs} className={cs.form_section} errors={errors} handleChange={handleChange3} value={courses3} control={control}/>
      </div>

      {textArea.map(items => (
        <TextAreaForm key={items.id} control={control} cs={cs} name={items.name} errors={errors} label={items.label}/>
      ))}

      <Button type={"submit"} className={cs.btn} variant="outlined">ВОЙТИ</Button>
    </form>
  );
};

export default FormRegisterCourses;