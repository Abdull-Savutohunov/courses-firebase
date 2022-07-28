import React from 'react';
import {useMediaQuery} from "react-responsive";
import Mobile from "./Mobile";
import Laptop from "./Laptop";

const Register = () => {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})
  const isLaptop = useMediaQuery({query: '(min-width: 769px)'})

  return (
    <React.Fragment>
      {isMobile && <Mobile/>}
      {isLaptop && <Laptop/>}
    </React.Fragment>
  );
};

export default Register;