import React from 'react'
import useLogin from '../../hooks/useLogin'
import { Outlet , Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const { isAuth } = useLogin()
  return isAuth === null ? <Navigate to={'/'}/> : <Outlet/>
}

export default PrivateRoutes