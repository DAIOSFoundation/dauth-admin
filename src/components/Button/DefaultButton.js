import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({ children, handleSearch }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">{children}</Button>
      {/* <Button onClick={handleSearch} variant="contained" color="primary">
        {children}
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
    </div>
  );
}
