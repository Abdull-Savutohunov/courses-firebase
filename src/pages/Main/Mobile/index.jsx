// import React from 'react';
// import {getAllUsers} from "../../../API";
// import {Grid} from "@mui/material";
// import Loading from "../../../components/UI/loading";
// import CardsMobile from "../../../components/CardsMobile";
// import Pagination from "../../../components/Pagination";
// import useLogin from "../../../hooks/useLogin";
// import RecipeReviewCard from "../../../components/Cards";
// import MediaQuery from "react-responsive";
// import BottomNavigate from "../../../components/BottomNavigate"; 
// import cs from './Mobile.module.scss'
// import { ScrollableTabsButtonVisibleLeng, ScrollableTabsButtonVisibleIT, ScrollableTabsButtonVisibleCooking, ScrollableTabsButtonVisibleBeauty, ScrollableTabsButtonVisibleNeedle, ScrollableTabsButtonVisibleNeedlework } from './../../../components/Tabs/index';

// export const MobileLeng = () => {
//   const {data , setCardsName , cardsUser , cardsName , setMore , alertErrors , isAuth , setAlertErrors , setUpdateData , loading} = useLogin()
//   const [users , setUsers] = React.useState(null)
//   const [dataBase , setDataBase] = React.useState(null)
//   const [items , setItems] = React.useState(null)
  
//   React.useEffect(() => {
//     if(data){
//       const base = Object.entries(data.favorites).map(([id , item]) => {
//         return {
//           id, 
//           ...item
//         }
//       })
//       setUsers(base)
//     }
//   }, [data])

//   console.log(dataBase);


//   function funblock(){
//     if(cardsUser){
//       const base = Object.entries(cardsUser?.data).map(([id , item]) => {
//         return {
//           id,
//           like: false,
//           ...item
//         }
//       })
//       setDataBase(base)
//     }
//   }

//   if(loading) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

//   return (
//     <>
//       <MediaQuery minWidth={769}>
//         <div className={cs.Laptop}>
//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleLeng setStateUser={setCardsName}/>
//           </div>

//           <Grid display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} style={{margin: '20px 0'}}>
//             {
//               items?.map((item, index) => <RecipeReviewCard data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} key={index} dataBase={item} />)
//             }
//           </Grid>
//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>
//       </MediaQuery>

//       <MediaQuery maxWidth={768}>
//         <div className={cs.Mobile}>

//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleLeng setStateUser={setCardsName}/>
//           </div>

//           <div className={cs.cards_container}>
//             {items?.map((item , index) => (
//               <CardsMobile cs={cs} key={index} data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} dataBase={item}/>
//             ))}
//           </div>

//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>

//         <MediaQuery maxWidth={768}>
//           <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
//             <BottomNavigate/>
//           </div>
//         </MediaQuery>

//       </MediaQuery>
//     </>
//   );
// };


// export const MobileIT = () => {  
//   const {data , setCardsName , cardsUser , cardsName , setMore , alertErrors , isAuth , setAlertErrors , setUpdateData , loading} = useLogin()
//   const [users , setUsers] = React.useState(null)
//   const [dataBase , setDataBase] = React.useState(null)
//   const [items , setItems] = React.useState(null)

//   React.useEffect(() => {funblock()} , [])
  // React.useEffect(() => {funblock()} , [cardsUser])

//   React.useEffect(() => {
//     if(data){
//       const base = Object.entries(data.favorites).map(([id , item]) => {
//         return {
//           id,
//           ...item
//         }
//       })
//       setUsers(base)
//     }
//   }, [data])


//   function funblock(){
//     if(cardsUser){
//       const base = Object.entries(cardsUser?.data).map(([id , item]) => {
//         return {
//           id,
//           like: false,
//           ...item
//         }
//       })
//       setDataBase(base)
//     }
//   }

//   if(loading) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

//   return (
//     <>
//       <MediaQuery minWidth={769}>
//         <div className={cs.Laptop}>
//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleIT setStateUser={setCardsName}/>
//           </div>

//           <Grid display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} style={{margin: '20px 0'}}>
//             {
//               items?.map((item, index) => <RecipeReviewCard data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} key={index} dataBase={item} />)
//             }
//           </Grid>
//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>
//       </MediaQuery>

//       <MediaQuery maxWidth={768}>
//         <div className={cs.Mobile}>

//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleIT setStateUser={setCardsName}/>
//           </div>

//           <div className={cs.cards_container}>
//             {items?.map((item , index) => (
//               <CardsMobile cs={cs} key={index} data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} dataBase={item}/>
//             ))}
//           </div>

//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>

//         <MediaQuery maxWidth={768}>
//           <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
//             <BottomNavigate/>
//           </div>
//         </MediaQuery>

//       </MediaQuery>
//     </>
//   );
// };

// export const MobileCooking = () => {
//   const {data , setCardsName , cardsUser , cardsName , setMore , alertErrors , isAuth , setAlertErrors , setUpdateData , loading} = useLogin()
//   const [users , setUsers] = React.useState(null)
//   const [dataBase , setDataBase] = React.useState(null)
//   const [items , setItems] = React.useState(null)

//   React.useEffect(() => {funblock()} , [])
//   React.useEffect(() => {funblock()} , [cardsUser])

//   React.useEffect(() => {
//     if(data){
//       const base = Object.entries(data.favorites).map(([id , item]) => {
//         return {
//           id,
//           ...item
//         }
//       })
//       setUsers(base)
//     }
//   }, [data])


//   function funblock(){
//     if(cardsUser){
//       const base = Object.entries(cardsUser?.data).map(([id , item]) => {
//         return {
//           id,
//           like: false,
//           ...item
//         }
//       })
//       setDataBase(base)
//     }
//   }

//   if(loading) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

//   return (
//     <>
//       <MediaQuery minWidth={769}>
//         <div className={cs.Laptop}>
//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleCooking setStateUser={setCardsName}/>
//           </div>

//           <Grid display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} style={{margin: '20px 0'}}>
//             {
//               items?.map((item, index) => <RecipeReviewCard data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} key={index} dataBase={item} />)
//             }
//           </Grid>
//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>
//       </MediaQuery>

//       <MediaQuery maxWidth={768}>
//         <div className={cs.Mobile}>

//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleCooking setStateUser={setCardsName}/>
//           </div>

//           <div className={cs.cards_container}>
//             {items?.map((item , index) => (
//               <CardsMobile cs={cs} key={index} data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} dataBase={item}/>
//             ))}
//           </div>

//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>

//         <MediaQuery maxWidth={768}>
//           <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
//             <BottomNavigate/>
//           </div>
//         </MediaQuery>

//       </MediaQuery>
//     </>
//   );
// };


// export const MobileBeauty = () => {
//   const {data , setCardsName , cardsUser , cardsName , setMore , alertErrors , isAuth , setAlertErrors , setUpdateData , loading} = useLogin()
//   const [users , setUsers] = React.useState(null)
//   const [dataBase , setDataBase] = React.useState(null)
//   const [items , setItems] = React.useState(null)

//   React.useEffect(() => {funblock()} , [])
//   React.useEffect(() => {funblock()} , [cardsUser])

//   React.useEffect(() => {
//     if(data){
//       const base = Object.entries(data.favorites).map(([id , item]) => {
//         return {
//           id,
//           ...item
//         }
//       })
//       setUsers(base)
//     }
//   }, [data])


//   function funblock(){
//     if(cardsUser){
//       const base = Object.entries(cardsUser?.data).map(([id , item]) => {
//         return {
//           id,
//           like: false,
//           ...item
//         }
//       })
//       setDataBase(base)
//     }
//   }

//   if(loading) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

//   return (
//     <>
//       <MediaQuery minWidth={769}>
//         <div className={cs.Laptop}>
//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleBeauty setStateUser={setCardsName}/>
//           </div>

//           <Grid display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} style={{margin: '20px 0'}}>
//             {
//               items?.map((item, index) => <RecipeReviewCard data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} key={index} dataBase={item} />)
//             }
//           </Grid>
//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>
//       </MediaQuery>

//       <MediaQuery maxWidth={768}>
//         <div className={cs.Mobile}>

//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleBeauty setStateUser={setCardsName}/>
//           </div>

//           <div className={cs.cards_container}>
//             {items?.map((item , index) => (
//               <CardsMobile cs={cs} key={index} data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} dataBase={item}/>
//             ))}
//           </div>

//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>

//         <MediaQuery maxWidth={768}>
//           <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
//             <BottomNavigate/>
//           </div>
//         </MediaQuery>

//       </MediaQuery>
//     </>
//   );
// };



// export const MobileNeedle = () => {
//   const {data , setCardsName , cardsUser , cardsName , setMore , alertErrors , isAuth , setAlertErrors , setUpdateData , loading} = useLogin()
//   const [users , setUsers] = React.useState(null)
//   const [dataBase , setDataBase] = React.useState(null)
//   const [items , setItems] = React.useState(null)

//   React.useEffect(() => {funblock()} , [])
//   React.useEffect(() => {funblock()} , [cardsUser])

//   React.useEffect(() => {
//     if(data){
//       const base = Object.entries(data.favorites).map(([id , item]) => {
//         return {
//           id,
//           ...item
//         }
//       })
//       setUsers(base)
//     }
//   }, [data])


//   function funblock(){
//     if(cardsUser){
//       const base = Object.entries(cardsUser?.data).map(([id , item]) => {
//         return {
//           id,
//           like: false,
//           ...item
//         }
//       })
//       setDataBase(base)
//     }
//   }

//   if(loading) return <Grid display={"flex"} justifyContent={"center"} alignItems={'center'} height={'80vh'}><Loading/></Grid>

//   return (
//     <>
//       <MediaQuery minWidth={769}>
//         <div className={cs.Laptop}>
//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleNeedlework setStateUser={setCardsName}/>
//           </div>

//           <Grid display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} style={{margin: '20px 0'}}>
//             {
//               items?.map((item, index) => <RecipeReviewCard data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} key={index} dataBase={item} />)
//             }
//           </Grid>
//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>
//       </MediaQuery>

//       <MediaQuery maxWidth={768}>
//         <div className={cs.Mobile}>

//           <div className={cs.filter}>
//             <ScrollableTabsButtonVisibleNeedlework setStateUser={setCardsName}/>
//           </div>

//           <div className={cs.cards_container}>
//             {items?.map((item , index) => (
//               <CardsMobile cs={cs} key={index} data={data} setAlertErrors={setAlertErrors} isAuth={isAuth} setMore={setMore} dataBase={item}/>
//             ))}
//           </div>

//           <Pagination setData={setItems} users={users} dataBase={dataBase}/>

//         </div>

//         <MediaQuery maxWidth={768}>
//           <div style={{position: 'fixed' , bottom: '0' , left: '0' , width: '100%'}}>
//             <BottomNavigate/>
//           </div>
//         </MediaQuery>

//       </MediaQuery>
//     </>
//   );
// };