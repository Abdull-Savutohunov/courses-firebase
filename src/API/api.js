import axios from "axios";

const baseURL = 'https://courses-b1159-default-rtdb.firebaseio.com/'

const  instance = axios.create({baseURL})

export default instance 
