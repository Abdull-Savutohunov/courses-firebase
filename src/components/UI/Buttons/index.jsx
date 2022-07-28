import React from 'react';
import cs from './Buttons.module.scss'

const Buttons = ({children}) => {
  return (
    <button className={cs.buttons}>
      {children}
    </button>
  );
};

export default Buttons;