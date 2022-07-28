import React from 'react';
import {useNavigate} from "react-router-dom";
import CircularIndeterminate, {Loading} from '../../UI/loading'
import {useForm} from "react-hook-form";
import {Button, Grid, Rating, Stack, TextField} from "@mui/material";
import {Controller} from "react-hook-form";
import {getMessage, getUsersMore, postMessage} from "../../../API";
import useLogin from "../../../hooks/useLogin";
import CardsMore from "../../CardsMore";
import cs from './mobile.module.scss'

const Mobile = () => {
  const {more , isAuth , setAlertErrors} = useLogin()
  const [moreData , setMoreData] = React.useState(null)
  const navigate = useNavigate()
  const {handleSubmit , control} = useForm()
  const [dataMessage , setDataMessage] = React.useState(null)
  const [updateData , setUpdateData] = React.useState(false)

  React.useEffect(() => {
    getUsersMore(more?.id , more?.directionCourses)
      .then(res => setMoreData(res?.data))
  }, [more , updateData])

  const onSubmit = (value) => {
    if(isAuth?.uid){
      const data = {[`${Math.floor(Math.random() * (0 , 1000000))}`]: {...value , id: isAuth?.uid , names: isAuth?.displayName , photo: isAuth?.photoURL }}
      postMessage(more?.id ,{...moreData?.message , ...data} , more?.directionCourses).then(res => setUpdateData(item => !item))
    }else {
      setAlertErrors(true)
    }
  }

  React.useEffect(() => {
    if(!more){
      navigate('/')
    }
  }, [more])

  React.useEffect(() => {
    if(moreData?.message){
      setDataMessage(Object.values(moreData.message))
    }
  }, [moreData])

  if(!moreData) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><CircularIndeterminate/></Grid>

  return (
    <div className={cs.More}>
      <div className={cs.more_header}>
        <img src={moreData?.urlAvatar} alt=""/>
      </div>
      <div className={cs.more_body}>
        <div className={cs.info}>
          <h2>Основные данные:</h2>
          <p>Имя: {moreData?.name}</p>
          <p>Город проживание: {moreData?.city}</p>
          <p>Номер: {moreData?.tel}</p>
        </div>

        <div className={cs.info}>
          <h2>Диплом:</h2>
          <p>Дата получение диплома: {moreData?.diplomaDate}</p>
          <p>Номер диплома: {moreData?.diplomaNumber}</p>
          <p>Направление: {moreData?.directionCoursesRu}</p>
        </div>

        <div className={cs.info}>
          <h2>О себе:</h2>
          <p>Стиль работы: {moreData?.coursesWorkStyle}</p>
          <p>Университет: {moreData?.university}</p>
          <p>Опыт работы {moreData?.workExperience} годиков</p>
          <p>О себе: {more?.Iam}</p>
        </div>

        <div className={cs.info}>
          <h2>Научные работы:</h2>
          <p>{moreData?.scientificWork}</p>
        </div>
      </div>
      <div className={cs.more_footer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cs.rating}>
            <Controller
              name={'rating'}
              control={control}
              render={({field}) => (
                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                  <Rating onChange={e => field.onChange(e)} name="size-large" defaultValue={0} size="large" />
                  <p>Звёздочки</p>
                </Grid>
              )}
            />
          </div>
          <div className={cs.inputs}>
            <Controller
              name={'message'}
              control={control}
              defaultValue={''}
              render={({field}) => (
                <TextField
                  onChange={event => field.onChange(event)}
                  fullWidth={true}
                  required
                  style={{color: 'white'}}
                  id="filled-required"
                  label="Отзыв"
                  defaultValue=""
                  variant="filled"
                />
              )}
            />
          </div>
          <Button className={cs.btn} variant={'outlined'} type={"submit"}>submit</Button>
        </form>

        <div className={cs.container_message}>
          {
            dataMessage && dataMessage.map((item , index) => <CardsMore cs={cs} key={index} rating={item.rating} message={item.message} photo={item.photo}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Mobile;