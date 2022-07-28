import instance from './api'

// export const createUser = data => axios.post('/')

export const getAll = () => instance.get('/cards/.json')

export const getLanguages = (id, languages) => instance.get(`/cards/${languages}/${id}.json`)

export const getEnglish = (id, languages, english) => instance.get(`/cards/${languages}/${english}/${id}.json`)

// export const postEnglish = (id, )




export const getUsersMore = (id , courses) => instance.get(`/cards/${courses}/${id}/.json`)

export const createNewUser = (data , userId) => instance.put(`/users/${userId}/.json` , data)

export const getUser = (id) => instance.get(`/users/${id}/.json`)

export const postMessage = (id , data , courses) => instance.put(`/cards/${courses}/${id}/message/.json` , data)

export const getMessage = (id) => instance.get(`/users/${id}/.json`)

export const getUserFavorites = (id) => instance.get(`/users/${id}/.json`)

export const updateDataUser = (id , data) => instance.put(`/users/${id}/.json` , data)

export const getStatus = (id) => instance.get(`/users/${id}/status/.json` )

export const changeStatus = (id , data) => instance.put(`/users/${id}/.json` , data)

export const addUserData = (id , courses , data) => instance.put(`/cards/${courses}/${id}/.json` , data)

export const deleteUserData = (id , courses) => instance.delete(`/cards/${courses}/${id}/.json`)

export const getAllUsers = (users) => instance.get(`/cards/${users}/.json`)

export const addFavorites = (id , data) => instance.put(`/users/${id}/favorites/.json` , data)

export const deleteFavorites = (id , deleteId) => instance.delete(`/users/${id}/favorites/${deleteId}/.json`)
