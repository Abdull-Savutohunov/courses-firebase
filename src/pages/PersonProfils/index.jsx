import React from 'react';
import useLogin from "../../hooks/useLogin";
import {getUser , getCourseDir} from "../../API";
import Courses from './Courses';
import StudentsComponents from './Student';

const Profils = () => {
  const {isAuth} = useLogin()
  const [people , setPeople] = React.useState(null)
  React.useEffect(() => {
    getUser(isAuth?.uid).then(res => setPeople(res.data.people))
    getCourseDir(isAuth?.uid).then(res => setPeople(res.data.course)) 

  }, [isAuth?.uid])

  return (
    <React.Fragment>
      {people && people === 'Courses' ? <Courses/> : <StudentsComponents/>}
    </React.Fragment>
  );
};

export default Profils