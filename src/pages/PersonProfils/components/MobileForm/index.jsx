import React from 'react';
import {CoursesProfile, StudentProfile} from "../../../../Utils/Profile/Profile";
import Inputs from "../../../../components/UI/Inputs";
import {Button, Grid} from "@mui/material";
import cs from "./MobileForm.module.scss";
import Loading from "../../../../components/UI/loading";

const Mobile = ({control , reset , dataBase , handleSubmit , onSubmit , defaultValues , errors , register , people , passwordValue , isAuth}) => {
  const ListBase = people === 'Courses' ? CoursesProfile : StudentProfile

  if(!ListBase) return <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} style={{height: '60vh'}}><Loading/></Grid>

  return (
    <div className={cs.Mobile}>
      <div className={cs.mobile_photo}>
        <img src={isAuth.photoURL} alt=""/>
      </div>
      <div className={cs.cards}>
        <div className={cs.cards_header}>
          <h1>Мой профиль</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={cs.cards_body}>
          {passwordValue && (<p style={{textAlign: 'center' , paddingBottom: '10px', color:'red'}}>Пароль должен быть не менее 8 символов!</p>)}
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
          {

          }
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
  );
};

export default Mobile;