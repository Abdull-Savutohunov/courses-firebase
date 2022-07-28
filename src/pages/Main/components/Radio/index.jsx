import React from 'react';
import {FormControl, FormControlLabel , Radio, RadioGroup} from "@mui/material";
import {Controller} from "react-hook-form";

const RadioComponents = ({control , list}) => {
  return (
    <>
      <Controller
        name={list.name}
        control={control}
        render={({field: { onChange}}) => (
          <FormControl style={{marginBottom: '15px'}}>
            {/*<FormLabel style={{textAlign: 'center'}} id="demo-row-radio-buttons-group-label">{list.label}</FormLabel>*/}
            <RadioGroup
              onChange={e => onChange(e)}
              row
              style={{margin: '0 auto'}}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {list.data.map(item => <FormControlLabel key={item.id} value={item.value} control={<Radio />} label={item.label} />)}
            </RadioGroup>
          </FormControl>
        )}
      />
    </>
  );
};

export default RadioComponents;