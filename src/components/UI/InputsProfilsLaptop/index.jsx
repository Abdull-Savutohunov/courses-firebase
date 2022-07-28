import React from 'react';
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";

const InputsProfileLaptop = ({name , errors , label , messages , type , className , control}) => {
  return (
    <Controller
      control={ control }
      name={name}
      error
      rules={{required: messages}}
      render={({field}) => (
        <TextField
          error={errors[name]?.message ? true : false}
          label={label}
          type={type}
          size='small'
          margin='none'
          className={className}
          fullWidth={true}
          onChange={e => field.onChange(e)}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
};

export default InputsProfileLaptop;