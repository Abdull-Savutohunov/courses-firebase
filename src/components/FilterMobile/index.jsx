import React from 'react';
import cs from './FilterMobile.module.scss'
import {BiDownArrowAlt} from "react-icons/bi";
import {useFilterData} from "../../hooks/useFilterData";

const FilterMobile = ({arrowsState , setArrowsState}) => {
  const {selectCity , setSelectCity} = useFilterData()

  return (
    <div className={cs.container}>
      <div className={cs.FilterMobile}>
        <div className={cs.logo}>
          <p>Фильтрация</p>
        </div>
        <div className={cs.arrows}>
          <BiDownArrowAlt
            className={arrowsState && `${cs.active}`}
            onClick={() => setArrowsState(item => !item)}
          />
        </div>
      </div>
      <div className={arrowsState ? `${cs.filter_container} ${cs.active}` : cs.filter_container}>
        <div className={cs.City}>
          <div className="">
            <p className={cs.checkbox}><input type="checkbox" name='city' value='beer' />Ош</p>
            <p className={cs.checkbox}><input type="checkbox" name='city' value='beer'/>Бишкек</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMobile;