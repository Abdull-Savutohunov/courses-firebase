import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import useLogin from "../../hooks/useLogin";
import {Button, CardActions} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {addFavorites, deleteFavorites, getUserFavorites} from "../../API";
import {MdFavorite} from "react-icons/md";
import {GrFavorite} from "react-icons/gr";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RecipeReviewCard({dataBase , setMore , setAlertErrors , isAuth , data}) {
  const {setUpdateData} = useLogin()
  const navigate = useNavigate()


  function add(value){
    value.favorites && delete value.favorites
    addFavorites(isAuth?.uid , {...data.favorites , [`${value.id}`]: value}).then(res => setUpdateData(item => !item))
  }

  function remove(value){
    deleteFavorites(isAuth?.uid , value).then(res => setUpdateData(item => !item))
  }

  return (
    <Card style={{margin: '0 20px 20px 20px'}} sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <AccountCircleIcon/>
          </Avatar>
        }
        title={
          (<p style={{fontSize: '18px'}}>{dataBase?.name}</p>)
        }
        subheader={dataBase?.directionCoursesRu}

        action={
          (
            <>
              {dataBase?.like
                ? <MdFavorite style={{width: '30px' , height: '100%' , transform: 'translateY(50%)' , marginRight: '5px'}} onClick={() => isAuth?.uid ? remove(dataBase?.id) : setAlertErrors(true)}/>
                : <GrFavorite style={{width: '30px' , height: '100%' , transform: 'translateY(50%)' , marginRight: '5px'}} onClick={() => isAuth?.uid ? add(dataBase) : setAlertErrors(true)}/>
              }
            </>
          )
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={dataBase?.urlAvatar}
        alt="Paella dish"
      />
      <CardContent>
        <Typography style={{marginBottom: '15px'}} variant="body2" color="text.secondary">
          {dataBase?.Iam}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={() => {
            setMore(dataBase)
            navigate('/more')
          }}
          variant={"outlined"}
          style={{width: '100%'}}
        >
          ??????????????????
        </Button>
      </CardActions>
    </Card>
  );
}
