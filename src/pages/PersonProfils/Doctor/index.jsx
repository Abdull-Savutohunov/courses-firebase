import React from 'react';
import {useMediaQuery} from "react-responsive";
import Mobile from "./Mobile";
import Laptop from "./Laptop";

const Courses = () => {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})
  const isLaptop = useMediaQuery({query: '(min-width: 769px)'})
  return (
    <>
      {isMobile && <Mobile/>}
      {isLaptop && <Laptop/>}
    </>
  );
};

export default Courses;