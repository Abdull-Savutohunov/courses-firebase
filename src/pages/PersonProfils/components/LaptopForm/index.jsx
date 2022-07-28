import React from 'react';
import {CoursesProfile, StudentProfile} from "../../../../Utils/Profile/Profile";
import cs from './LaptopForm.module.scss'

const LaptopForm = ({control , dataBase , errors , register , people , isAuth}) => {
  const ListBase = people === 'Courses' ? CoursesProfile : StudentProfile

  return (
    <div>
      
    </div>
  );
};

export default LaptopForm;