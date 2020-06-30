import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickerFrom({ children, handleDateFrom }) {
  const classes = useStyles();

  // const getDate = () => {
  //   let today = new Date();
  //   let dd = today.getDate();
  //   let mm = today.getMonth() + 1;
  //   let yyyy = today.getFullYear();
  //   if (dd < 10) {
  //     dd = "0" + dd;
  //   }
  //   if (mm < 10) {
  //     mm = "0" + mm;
  //   }
  //   let defaultDate = `${yyyy}-${mm}-${dd}`;
  //   return defaultDate;
  // };

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={handleDateFrom}
        id="date"
        label={children}
        type="date"
        // defaultValue={getDate()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
