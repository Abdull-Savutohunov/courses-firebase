import React from 'react';
import cs from './laptopAuth.module.scss'
import FormAuth from "../../../components/UI/FormAuth";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {Auth} from "../../../Utils/AuthInputs";
import {auth} from "../../../firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import useLogin from "../../../hooks/useLogin";

const LaptopAuth = () => {
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
      setError(true)
    }
    reset()
  }

  return (
    <div className={cs.laptopAuth}>
      <div className={cs.right}>
        <div className={cs.form_container}>
          <FormAuth  authList={Auth} handleSubmit={handleSubmit} cs={cs} onSubmit={onSubmit} control={control} errors={errors} error={error}/>
          <div className={cs.container_link}>
            <Link className={cs.link} to='/auth/register'>У вас нету аккаунта?</Link>
          </div>
        </div>
      </div>
      {/* <div className={cs.left}>
        <img src={background} alt=""/>
      </div> */}
    </div>
  );
};

export default LaptopAuth;