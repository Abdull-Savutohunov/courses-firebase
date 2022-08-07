import React from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase/firebase";
import {getAllUsers, getUser} from "../../API";

export const AuthContext = React.createContext({})

export const AuthProviders = ({children}) => {
	const [cardsName , setCardsName] = React.useState('Languages')
	const [FaUserLock , setFaUserLock] = React.useState(false)
	const [ImUserPlus , setImUserPlus] = React.useState(false)
	const [alertErrors , setAlertErrors] = React.useState(false)
	const [isAuth, setIsAuth] = React.useState(null)
	const [data , setData] = React.useState(null)
	const [updateData , setUpdateData] = React.useState(false)
	const [more , setMore] = React.useState(null)
	const [filterData , setFilterData] = React.useState(null)
	const [cardsUser , setCardsUser] = React.useState(null)

	React.useEffect(() => {
		getUser(isAuth?.uid)
			.then(res => setData(res.data))
	}, [isAuth , updateData])

	React.useEffect(() => {
		getAllUsers(cardsName)
			.then(res => {
				setCardsUser(res)
			})
	}, [ isAuth , updateData])

	React.useEffect(() => {
		const Listen = onAuthStateChanged(auth, user => {
			if (user){
				setIsAuth(user)
			}else{
				setIsAuth(null)
			}
		})
		return () => Listen()
	}, [isAuth , updateData])

	const value = React.useMemo(() => {
		return {
			setUpdateData,
			isAuth,
			setImUserPlus,
			ImUserPlus,
			setFaUserLock,
			FaUserLock,
			data,
			setMore,
			more,
			setFilterData,
			filterData,
			setAlertErrors,
			alertErrors,
			setCardsName,
			cardsUser,
			cardsName
		}
	}, [cardsName , cardsUser , setCardsName ,setAlertErrors , alertErrors , isAuth , setImUserPlus , ImUserPlus , FaUserLock , setFaUserLock , data , setUpdateData , setMore , more , setFilterData , filterData])
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

