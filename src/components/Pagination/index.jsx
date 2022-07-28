import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import cs from './index.module.scss'

const Pagination = ({dataBase , setData , users}) => {
  const [items , setItems] = React.useState(null)
  const [dataBaseItem , setDataBaseItem] = React.useState(null)
  const page_size = 8
  const [page , setPage] = React.useState(1)
  const total_page = Math.ceil(dataBase?.length / page_size)

  React.useEffect(() => setDataBaseItem(dataBase) , [dataBase])
  React.useEffect(() => setData(items) , [items])

  React.useEffect(() => setPage(1) , [])

  React.useEffect(() => {
    if(users){
      for(let i = 0; i < items?.length; i++){
        for(let n = 0; n < items?.length; n++){
          if(users[i]?.id === items[n]?.id){
            arrayChange(n)
          }
        }
      }
    }
  }, [items , page])

  function arrayChange(index){
    const value = items[index].like = true
    if(typeof value !== 'boolean'){
      setItems(value)
      setData(items)
    }
  }

  React.useEffect(() => {
    updateBlock()
  }, [page, dataBaseItem])

  function updateBlock(){
    const base = dataBaseItem?.slice(
      (page - 1) * page_size,
      (page - 1) * page_size + page_size
    )
    setItems(base)
  }

  function nextPagination(){
    if(page !== total_page){
      setPage(page + 1)
    }else {
      setPage(1)
    }
  }

  function prevPagination(){
    if(page !== 1){
      setPage(page - 1)
    }else {
      setPage(total_page)
    }
  }

  return (
    <ul className={cs.pagination}>
      <li className={cs.li} onClick={prevPagination}>
        <AiOutlineArrowLeft/>
      </li>
      {
        Array.from({length: total_page}).map((item , i) => (
          <li
            className={page === i + 1 ? `${cs.li} ${cs.active}` : cs.li}
            onClick={() => setPage(i + 1)}
            key={i}
          >
            {i + 1}
          </li>
        ))
      }
      <li className={cs.li} onClick={nextPagination}>
        <AiOutlineArrowRight/>
      </li>
    </ul>
  );
};

export default Pagination;