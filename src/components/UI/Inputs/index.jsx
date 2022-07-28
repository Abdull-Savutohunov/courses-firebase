import React from 'react';
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";

const Inputs = ({label , name , control , messages , type , cs , errors , dataBase , reset , register , defaultValues}) => {

  React.useEffect(() => {
    defaultValues[name] = dataBase
    reset({ ...defaultValues });
  }, []);

  return (
    <>
      <Controller
        control={ control }
        name={name}
        error
        rules={{required: messages}}
        render={({field}) => (
          <TextField
            error={errors[name]?.message ? true : false}
            label={label}
            {...register(name)}
            defaultValue={' '}
            value={defaultValues[name]}
            type={type}
            margin='none'
            className={cs.inputs}
            fullWidth={true}
            onChange={e => field.onChange(e)}
            helperText={errors[name]?.message}
          />
        )}
      />
    </>
  );
};

export default Inputs;