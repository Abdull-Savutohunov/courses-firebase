import React from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";

const FormSection = ({control , handleChange , errors, value , cs , directionCourses}) => {
  return (
    <Controller
      control={ control }
      name={directionCourses.name}
      required={true}
      rules={{required: "Обязательно для заполнения"}}
      render={({field}) => (
        <FormControl error={errors.directionCourses?.message && true} fullWidth={true}>
          <InputLabel id="demo-simple-select-autowidth-label">{directionCourses.label}</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth-label"
            value={value}
            className={cs.form_select}
            onChange={e => {
              field.onChange(e)
              handleChange(e)
            }}
            autoWidth
            label={directionCourses.label}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              directionCourses.directions.map(item =>
              <MenuItem key={item.id} value={item.value}>{item.title}</MenuItem>
              )
            }
          </Select>
          <FormHelperText>{errors.directionCourses?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default FormSection;