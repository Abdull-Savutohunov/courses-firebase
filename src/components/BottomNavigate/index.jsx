import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate, useParams} from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function BottomNavigate() {
  const {alertErrors , setAlertErrors , isAuth} = useLogin()
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          isAuth?.uid && setValue(newValue);
        }}
      >

        <BottomNavigationAction
          onClick={() => isAuth?.uid ? navigate('/') : setAlertErrors(true)}
          label="Главная"
          icon={<HomeIcon />}
        />

        <BottomNavigationAction
          onClick={() => isAuth?.uid ? navigate('/favorites') : setAlertErrors(true)}
          label="Favorites"
          icon={<FavoriteIcon />}
        />

        <BottomNavigationAction
          onClick={() => isAuth?.uid ? navigate('/profils') : setAlertErrors(true)}
          label="Профиль"
          icon={<AccountCircleIcon />}
        />

      </BottomNavigation>
    </Box>
  );
}
