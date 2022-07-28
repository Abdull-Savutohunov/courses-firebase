import React from 'react';
import {TextareaAutosize} from "@mui/material";
import {Controller} from "react-hook-form";

const TextAreaForm = ({cs , control , name , messages , label , errors , className}) => {
  return (
    <Controller
      control={ control }
      name={name}
      rules={{required: messages}}
      render={({field}) => (
        <TextareaAutosize
          name={name}
          className={cs.textArea}
          aria-label="empty textarea"
          placeholder={label}

          style={{ width: '100%' , height: '50px' , fontSize: '16px' , padding: '3px'}}
          onChange={e => field.onChange(e)}
          minLength={5}
        />
      )}
    />
  );
};

export default TextAreaForm;