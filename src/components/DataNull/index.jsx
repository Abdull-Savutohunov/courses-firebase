import React from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import {Grid} from "@mui/material";

const DataNull = () => {
  return (
    <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} style={{height:'80vh'}}>
      <FileCopyIcon style={{width: '50px' , height: '50px'}}/>
      <h1>Пусто</h1>
    </Grid>
  );
};

export default DataNull;