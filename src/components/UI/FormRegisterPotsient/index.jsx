import React from 'react';
import AuthInputs from "../AuthInputs";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {RegisterStudent} from "../../../Utils/AuthInputs";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../../firebase/firebase";
import {createNewUser} from "../../../API";
import useLogin from "../../../hooks/useLogin";

const FormRegisterStudent = ({cs}) => {
  const {setUpdateData} = useLogin()
  const navigate = useNavigate()
  const [passwordValue , setPasswordValue] = React.useState(false)
  const {control , handleSubmit , formState: {
    errors
  }} = useForm()

  const handleNewUser = (data, userId) => {
    createNewUser(data, userId).then(res => {
      setUpdateData(item => !item)
      navigate('/')
    })
  }

  const onSubmit = async (data , e) => {
    if(data.password.length > 8){
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await updateProfile(res.user, {
        displayName: data.username,
        photoURL: data.urlAvatar,
      })
      res && handleNewUser({...data , people: 'Student' , favorites: {key: 'value'}} , res.user.uid)
      e.target.reset()
    }else {
      setPasswordValue(true)
    }
  }

  return (
    <form className={cs.form} onSubmit={handleSubmit(onSubmit)}>
      {passwordValue && (<p style={{textAlign: 'center' , paddingBottom: '10px', color:'red'}}>Пароль должен быть не менее 8 символов!</p>)}
      {RegisterStudent.map(({id , name , messages , label , type}) => (
        <AuthInputs type={type} messages={messages} control={control} cs={cs} name={name} errors={errors} label={label} key={id}/>
      ))}
      <Button type={"submit"} className={cs.btn} variant="outlined">ВОЙТИ</Button>
    </form>
  );
};

export default FormRegisterStudent;