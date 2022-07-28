import React from 'react';
import useLogin from "../../hooks/useLogin";
import {getUser} from "../../API";
import StudentsComponents from "./Potsient";
import Courses from './Doctor/index';

const Profils = () => {
  const {isAuth} = useLogin()
  const [people , setPeople] = React.useState(null)
  React.useEffect(() => {
    getUser(isAuth?.uid).then(res => setPeople(res.data.people))
  }, [isAuth?.uid])

  return (
    <React.Fragment>
      {people && people === 'Courses' ? <Courses/> : <StudentsComponents/>}
    </React.Fragment>
  );
};

export default Profils