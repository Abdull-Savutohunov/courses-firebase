import React from 'react';
import {useMediaQuery} from "react-responsive";
import Mobile from "./Mobile";
import Laptop from "./Laptop";

const More = () => {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})
  const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

  return (
    <div>
      {isMobile && <Mobile/>}
      {isLaptop && <Laptop/>}
    </div>
  );
};

export default More;