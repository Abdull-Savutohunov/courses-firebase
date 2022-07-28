import React from 'react';
import {getUsersMore, postMessage} from "../../../API";
import useLogin from "../../../hooks/useLogin";
import {useNavigate} from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, Rating, TextField} from "@mui/material";
import CircularIndeterminate from "../../UI/loading";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import cs from './Laptop.module.scss'
import {Controller, useForm} from "react-hook-form";
import CardsMore from "../../CardsMore";

const Laptop = () => {
  const {more , isAuth , setAlertErrors} = useLogin()
  const [moreData , setMoreData] = React.useState(null)
  const [updateData , setUpdateData] = React.useState(false)
  const [dataMessage , setDataMessage] = React.useState(null)
  const {handleSubmit , control , reset} = useForm()
  const navigate = useNavigate()

  const onSubmit = (value) => {
    if(isAuth?.uid){
      const data = {[`${Math.floor(Math.random() * (0 , 1000000))}`]: {...value , id: isAuth?.uid , names: isAuth?.displayName , photo: isAuth?.photoURL }}
      postMessage(more?.id ,{...moreData?.message , ...data} , more?.directionCourses).then(res => {
        setUpdateData(item => !item)
        reset()
      })
    }else {
      setAlertErrors(true)
    }
  }

  React.useEffect(() => {
    getUsersMore(more?.id , more?.directionCourses)
      .then(res => setMoreData(res?.data))
  }, [more , updateData])

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
    <>
      <div className={cs.cards}>
        <div className={cs.cards_header}>
          <div className={cs.container}>
            <img src={moreData.urlAvatar} alt=""/>
          </div>
          <ul className={cs.text}>
            <li>
              <p>Имя: {moreData?.name}</p>
            </li>
            <li>
              <p>Город проживание: {moreData?.city}</p>
            </li>
            <li>
              <p>Номер: {moreData?.tel}</p>
            </li>
            <li>
              <p>Направление курсов: {moreData?.directionCoursesRu}</p>
            </li>
          </ul>
        </div>
        <div className={cs.cards_body}>
          <div className={cs.container}>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{fontSize: '24px'}} variant={"h2"}>Основные данные:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li style={{marginBottom: '8px'}}>
                    <p>Имя: {moreData?.name}</p>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <p>Город проживание: {moreData?.city}</p>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <p>Номер: {moreData?.tel}</p>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{fontSize: '24px'}} variant={"h2"}>Лицензияна на преподования:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li style={{marginBottom: '8px'}}>
                    <p>Дата получение лицензии: {moreData?.diplomaDate}</p>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <p>Подтверждение лицензии: {moreData?.diplomaNumber}</p>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <p>Направление курсов: {moreData?.directionCoursesRu}</p>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{fontSize: '24px'}} variant={"h2"}>Об образовательном центре:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li style={{marginBottom: '8px'}}>
                    <p>Личные качесва учителей: {moreData?.coursesWorkStyle}</p>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <p>Образование учителей: {moreData?.university}</p>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <p>Сколько лет на рынке {moreData?.workExperience} год</p>
                  </li>
                  <li style={{marginBottom: '8px'}}>
                    <p>Об образовательном центре: {more?.Iam}</p>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{fontSize: '24px'}} variant={"h2"}>Результаты ученикоов и выпускников:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant={'p'}>
                  {moreData?.scientificWork}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={cs.cards_footer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cs.rating}>
              <Controller
                name={'rating'}
                control={control}
                render={({field}) => (
                  <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} style={{marginBottom: '10px'}}>
                    <Rating onChange={e => field.onChange(e)} name="size-large" defaultValue={0} size="large" />
                  </Grid>
                )}
              />
            </div>
            <div className={cs.inputs}>
              <Controller
                name={'message'}
                control={control}
                defaultValue={''}
                style={{color: 'white'}}
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
            <Button className={cs.btn} style={{width: '100%' , marginTop: '10px'}} variant={'outlined'} type={"submit"}>submit</Button>
          </form>

          <div className={cs.container_message}>
            {
              dataMessage && dataMessage.map((item , index) => <CardsMore cs={cs} key={index} rating={item.rating} message={item.message} photo={item.photo}/>)
            }
          </div>
        </div>
      </div>
    </>
  );
};

// <h2>Научные работы:</h2>
// <p>{moreData?.scientificWork}</p>

export default Laptop;