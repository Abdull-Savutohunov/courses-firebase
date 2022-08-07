import React from 'react';
import cs from './Laptop.module.scss'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import FormRegisterCourses from './../../../components/UI/FormRegisterCourses/index';
import FormRegisterStudent from './../../../components/UI/FormRegisterStudent/index';

const Laptop = () => {
  const [changeComponents , setChangeComponents] = React.useState(true)

  return (
    <div className={cs.laptop}>
      <div className={cs.left}>
        <div className={cs.form_container}>
          <div className={cs.title_container}>
            <h1 className={cs.title}>Регистрация {changeComponents ? 'Курса' : 'Студента'} </h1>
          </div>
          <div className={cs.change_components_btn}>
            <Button onClick={e => setChangeComponents(true)}>Мы курсы</Button>
            <Button onClick={e => setChangeComponents(false)}>Я студент</Button>
          </div>
          <div>
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
      </div>
      {/* <div className={cs.right}>
        <img src={background} alt=""/>
      </div> */}
    </div>
  );
};

export default Laptop;