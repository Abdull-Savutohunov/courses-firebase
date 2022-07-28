import React from 'react';
import {Rating} from "@mui/material";

const CardsMore = ({rating , photo , message, value , cs}) => {
  return (
    <div className={cs.cards}>
      <div className={cs.cards_header}>
        <div className={cs.logo_image}>
          <img src={photo} alt=""/>
        </div>
        <div className={cs.info_list}>
          <p>{value}</p>
          <Rating className={cs.rating} disabled={true} name="size-large" value={rating++} size="large" />
        </div>
      </div>
      <div className={cs.cards_body}>
        <p>
          {message}
        </p>
      </div>
    </div>
  );
};

export default CardsMore;