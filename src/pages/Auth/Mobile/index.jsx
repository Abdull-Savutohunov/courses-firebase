import React from 'react';
import {useForm} from "react-hook-form";
import FormAuth from "../../../components/UI/FormAuth";
import cs from './mobileAuth.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../../firebase/firebase";
import {Auth} from "../../../Utils/AuthInputs";
import {signInWithEmailAndPassword} from "firebase/auth";
import useLogin from "../../../hooks/useLogin";

const MobileAuth = () => {
  const navigate = useNavigate()
  const {setUpdateData} = useLogin()
  const [error , setError] = React.useState(false)
  const {control , reset , handleSubmit , formState: {
    errors
  }} = useForm()

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth , data.email , data.password)
      setUpdateData(item => !item)
      navigate('/')
    }catch(e){
      setError(item => !item)
    }
    reset()
  }

  return (
    <div className={cs.mobileAuth}>
      {/* <img src={background} className={cs.background} alt=""/> */}
      <div className={cs.form_container}>
        <FormAuth authList={Auth} handleSubmit={handleSubmit} cs={cs} onSubmit={onSubmit} control={control} errors={errors} error={error}/>
        <div className={cs.container_link}>
          <Link className={cs.link} to='/auth/register'>У вас нету аккаунта ?</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileAuth;