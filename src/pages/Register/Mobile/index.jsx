import React from 'react';
import {Button} from "@mui/material";
import {Link} from 'react-router-dom'
import cs from './Mobile.module.scss'
import FormRegisterCourses from './../../../components/UI/FormRegisterCourses/index';
import FormRegisterStudent from './../../../components/UI/FormRegisterStudent/index';

const Mobile = () => {
  const [changeComponents , setChangeComponents] = React.useState(true)

  return (
    <div className={cs.mobile}>
      <div className={cs.form_container}>
        <h1 className={cs.title}>Регистрация</h1>
        <div className={cs.change_components_btn}>
          <Button onClick={e => setChangeComponents(true)}>Мы курсы</Button>
          <Button onClick={e => setChangeComponents(false)}>Я студент</Button>
        </div>
        <div className={cs.container_form}>
          {
            changeComponents
              ? <FormRegisterCourses cs={cs}/>
              : <FormRegisterStudent cs={cs}/>
          }
        </div>
        <div className={cs.container_link}>
          <Link className={cs.link} to='/auth/login'>Есть аккаунт ?</Link>
        </div>
      </div>
      {/* <img src={background} alt=""/> */}
    </div>
  );
};

export default Mobile;
