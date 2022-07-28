import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";

const SelectComponents = ({list , control}) => {
  return (
    <>
      <Controller
        name={list.name}
        control={control}
        render={({field: { onChange}}) => (
          <FormControl style={{marginBottom: '15px'}} fullWidth>
            <InputLabel id="demo-simple-select-label">{list.label}</InputLabel>
            <Select
              defaultValue=''
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={list.label}
              style={{zIndex: '120'}}
              onChange={e => onChange(e)}
            >
              <MenuItem value={''}>Выберите</MenuItem>
              {list.data.map(item => <MenuItem key={item.id} value={item.value}>{item.title}</MenuItem>)}
            </Select>
          </FormControl>
        )}
      />
    </>
  );
};

export default SelectComponents;