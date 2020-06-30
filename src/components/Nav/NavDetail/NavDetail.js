import React from "react";
import { withRouter, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import styled from "styled-components";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PaymentIcon from "@material-ui/icons/Payment";
import WorkIcon from "@material-ui/icons/Work";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    paddingLeft: "5px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    textDecoration: "none",
  },
  nestedText: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <Link to="/" className={classes.nestedText}>
        <ListItem button>
          <ListItemIcon>
            <RotateLeftIcon />
          </ListItemIcon>
          <ListItemText primary="DAIB" />
        </ListItem>
      </Link>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="상품 관리" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/product/status" className={classes.nestedText}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FindInPageIcon />
              </ListItemIcon>
              <ListItemText primary="상품 조회" />
            </ListItem>
          </Link>
          <Link to="/product/register" className={classes.nestedText}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <ListItemText primary="상품 등록" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Link to="/customer" className={classes.nestedText}>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="고객 관리" />
        </ListItem>
      </Link>
      <Link to="/payment" className={classes.nestedText}>
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="결제 관리" />
        </ListItem>
      </Link>
    </List>
  );
}
