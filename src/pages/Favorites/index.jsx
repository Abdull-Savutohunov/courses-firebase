import React from 'react';
import BottomNavigate from "../../components/BottomNavigate";
import MediaQuery from "react-responsive";
import useLogin from "../../hooks/useLogin";
import cs from './Favorites.module.scss'
import CardsMobile from "../../components/CardsMobile";
import RecipeReviewCard from "../../components/Cards";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Grid} from "@mui/material";

const Favorites = () => {
  const {data , setUpdateData , setAlertErrors , isAuth , setMore} = useLogin()
  const [dataBase , setDataBase] = React.useState(null)

  React.useEffect(() => {
    let len = Object.values(data?.favorites).length
    if(len <= 1){
      return setDataBase(null)
    }

    const base = Object.values(data?.favorites).filter((item) => {
      if(typeof item === 'object'){
        return item
      }
    })
    setDataBase(base)
  }, [data])

  if(dataBase === null) return <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} style={{height: '100vh'}}>
    <InsertDriveFileIcon style={{width: '40px' , height: '40px'}}/>
    <h1>Пусто</h1>
  </Grid>

  return (
    <div className={cs.Favorites}>

      <MediaQuery maxWidth={768}>
        <div className={cs.cards_container}>
          {dataBase?.map((item , index) => (
            <CardsMobile cs={cs} key={index} data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} dataBase={{...item , like: true}}/>
          ))}
        </div>
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <Grid display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} style={{margin: '20px 0'}}>
          {
            dataBase?.map((item, index) => <RecipeReviewCard data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} key={index} dataBase={{...item , like: true}} />)
          }
        </Grid>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
          <BottomNavigate/>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Favorites;