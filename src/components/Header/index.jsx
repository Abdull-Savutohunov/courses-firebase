import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from "@mui/icons-material/Menu";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from "react-router-dom";
import {handleSignOut} from "../../firebase/firebase";
import useLogin from "../../hooks/useLogin";
import { useDispatch } from 'react-redux';
import {changeSort} from '../../redux/slices/filterSlice'

const settings = ['Аккаунт', 'Выйти' ,  'favorites' ];
const settings2 = ['Регистрация', 'Войти'];
const pages2 = [
  {
    id: 1,
    title: 'languages',
    route: '/languages'
  },
  {
    id: 2,
    title: 'technology',
    route: '/technology'
  },
  {
    id:3,
    title:'cooking',
    route:'/cooking'
  },
  {
    id:4,
    title:'needlework',
    route:'/needlework'
  },
  {
    id:5,
    title:'beauty',
    route:'/beauty'
  },
];

const ResponsiveAppBar = () => {
  const {isAuth} = useLogin()
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch()

  const handleFunctionUsers = (event) => {
    if(event === 'Аккаунт') navigate('profils')
    if(event === 'favorites') navigate('/favorites')
    if(event === 'Выйти') handleSignOut()
    if(event === 'Регистрация') navigate('/auth/register')
    if(event === 'Войти') navigate('/auth/login')
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar  style={{background:'black'}} position="static">
      <Container  maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COURSES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
              pages2.map(page => (
                <MenuItem key={page.id} onClick={event => {
                  page.title !== 'favorites' && dispatch(changeSort(page.title))
                  navigate(`${page.route}`)
                  handleCloseNavMenu(event)
                }}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))
              }
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COURSES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages2.map((page) => (
              <Button
                key={page.id}
                onClick={event => {
                  dispatch(changeSort(page.title))
                  navigate(`${page.route}`)
                  handleCloseNavMenu(event)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={isAuth?.displayName && isAuth.displayName.split('')[0]} src={isAuth?.photoURL && isAuth.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isAuth?.uid
                ? settings.map((setting) => (
                  <MenuItem key={setting} onClick={event => {
                    handleFunctionUsers(setting)
                    handleCloseUserMenu(event)
                  }}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))

                : settings2.map((setting) => (
                  <MenuItem key={setting} onClick={event => {
                    handleFunctionUsers(setting)
                    handleCloseUserMenu(event)
                  }}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;


