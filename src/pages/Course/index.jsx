import React, {useEffect} from 'react'
import { getCourseDir } from '../../API'
// import { MobileBeauty } from '../Main/Mobile'
import { useParams } from 'react-router-dom';
import { connectStorageEmulator } from 'firebase/storage';
import RecipeReviewCard from './../../components/Cards/index';
import CardsMobile from './../../components/CardsMobile/index';
import CardsMore from './../../components/CardsMore/index';
import { MobileLeng } from '../Main/Mobile';

const Course = () => {
  const { title } = useParams()

  console.log(title)

  useEffect(() => {
    getCourseDir(title)
    .then(res => {
      console.log(res);
    })
  }, [title])

  return (
    <div>
      {/* <RecipeReviewCard/> */}
      {/* <MobileLeng/> */}
    </div>
  )
}

export default Course