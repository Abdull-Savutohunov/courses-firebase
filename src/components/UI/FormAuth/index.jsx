import React from 'react';
import AuthInputs from "../AuthInputs";
import {Button, Typography} from "@mui/material";

const FormAuth = ({handleSubmit , onSubmit , cs , control , errors , authList , error}) => {
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className={cs.form_form}>
        <h1 className={cs.form_title}>Авторизация</h1>
        <Typography
          style={error ? {display: 'block' , color: 'red' , textAlign: 'center'} : {display: 'none'}}
          variant="p"
        >
          неправильная почта или пароль
        </Typography>
        {authList.map((item) => (
          <AuthInputs messages={item.messages} cs={cs} type={item.type} control={control} name={item.name} errors={errors} label={item.label} key={item.id}/>
        ))}
        <Button type={"submit"} className={cs.btn} variant="outlined">ВОЙТИ</Button>
      </form>
    </React.Fragment>
  );
};

export default FormAuth;