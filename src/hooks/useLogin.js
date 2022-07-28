import React from 'react'
import {AuthContext} from "../provider/AuthProviders/AuthProviders";

const useLogin = () => {
  return React.useContext(AuthContext)
}

export default useLogin