import React from 'react';
import {Alert} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useLogin from "../../hooks/useLogin";
import cs from "./alertError.module.scss";

const AlertError = ({style}) => {
  const {alertErrors , setAlertErrors} = useLogin()
  return (
    <div style={{...style}} className={cs.alertErros}>
      {
        alertErrors && (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertErrors(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Вы не авторизованы
          </Alert>
        )
      }
    </div>
  );
};

export default AlertError;