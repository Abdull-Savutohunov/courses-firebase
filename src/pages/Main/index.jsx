// import { ToggleButton, ToggleButtonGroup } from '@mui/material';
// import React from 'react';
// // import Mobile from "./Mobile";
// import useLogin from './../../hooks/useLogin';
// import { useEffect } from 'react';
import { postCategories } from "../../API";

const Main = () => {
  // const [ dataBase , setDataBase ] = React.useState(null)

  // const { data , cardsUser } = useLogin() 
  // const [ aligment , setAligment ] = React.useState('web')
  // const [ filtered , setFiltered ] = React.useState(dataBase)

  const filterOptions = {
    languages: []
  }

  postCategories(filterOptions)



  // const handelChenge = ( newAligment ) => {
  //   setAligment(newAligment)
  // }


  // React.useEffect(() => {funblock()} , [])
  // React.useEffect(() => {funblock()} , [cardsUser])



  // React.useEffect(() => {
  //   if(data){
  //     const base = Object.entries(cardsUser?.data).map(([id , item]) => {
  //       return {
  //         id,
  //         ...item
  //       }
  //     })
  //   }
  // } , [data])


  // function funblock(){
  //   if(cardsUser){
  //     const base = Object.entries(cardsUser?.data).map(([id , item]) => {
  //       return {
  //         id,
  //         like: false,
  //         ...item
  //       }
  //     })
  //     setDataBase(base)
  //   }
  // }

  // function todoFilter(status){
  //   if(status === 'all'){
  //     setFiltered(dataBase)
  //   } else {
  //     let newTodo = [...dataBase].filter(item => item.people === status)
  //     setFiltered(newTodo)
  //   }
  // }
  
  // console.log(filtered);
  

return(
  <div>
  </div>
)

  // return (
  //   <React.Fragment>
  //     <div>
  //       <ToggleButtonGroup
  //         color="primary"
  //         value={aligment}
  //         exclusive
  //         onChange={handelChenge}
  //       >

  //         <ToggleButton
  //           onClick={() => todoFilter('all')}
  //           value='all'
  //         >
  //           Main
  //         </ToggleButton>

  //         <ToggleButton
  //           onClick={() => todoFilter("Courses")}
  //           value='Courses'
  //         >
  //           Courses
            
  //         </ToggleButton>

  //       </ToggleButtonGroup>

  //     {/* <Mobile/> */}
  //     </div>

  //     <div>
  //       {
  //         filtered && filtered.map((item , i) => {
  //           <div key={i}>
  //             <p>{item.people}</p>
  //           </div>
  //         })
  //       }
  //     </div>
  //   </React.Fragment>
  // );
};

export default Main;