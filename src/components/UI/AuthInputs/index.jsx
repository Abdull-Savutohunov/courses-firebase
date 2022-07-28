import React from 'react';
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";

const AuthInputs = ({control , name , errors , label , cs , messages , type}) => {
  return (
    <React.Fragment>
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
            margin='normal'
            className={cs.auth_input}
            fullWidth={true}
            onChange={e => field.onChange(e)}
            helperText={errors[name]?.message}
          />
        )}
      />
    </React.Fragment>
  );
};

export default AuthInputs;