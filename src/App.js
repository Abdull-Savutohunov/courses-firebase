import React from "react";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import { Route , Navigate , Routes } from 'react-router-dom'
import Main from "./pages/Main";
import More from "./components/More";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import Profils from "./pages/PersonProfils";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import ResponsiveAppBar from "./components/Header";
import AlertError from "./components/AlertError";
import MediaQuery from "react-responsive";
import Languages from './pages/Languages/index';
import Technology from './pages/Technology/index';
import Cooking from './pages/Cooking/index';
import Needlewokr from './pages/Needlework/index';
import Course from "./pages/Course";

function App() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/:title' element={<Course/>}/>
          {/* <Route path='/profils' element={<Profils/>}/>
          <Route path='/languages' element={<Languages/>}/>
          <Route path='/technology' element={<Technology/>}/>
          <Route path='/cooking' element={<Cooking/>}/>
          <Route path='/needlework' element={<Needlewokr/>}/>
          <Route path='/beauty' element={<Beauty/>}/> */}

          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
        <Route path='/more' element={<More/>}/>
        {/*<Route path='/more/:id' element={<More/>}/>*/}
        <Route path='/' element={<Main/>}/>
        <Route path='/auth/login' element={<Auth/>}/>
        <Route path='/auth/register' element={<Register/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>

      <MediaQuery maxWidth={768}>
        <AlertError style={{bottom: '4em' , left: '0.3em'}}/>
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <AlertError/>
      </MediaQuery>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
