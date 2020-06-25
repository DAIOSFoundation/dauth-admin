import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import DatePicker from "../../components/DatePicker/DatePicker";
import PaginationTable from "../../components/Table/PaginationTable/PaginationTable";
import Select from "../../components/Select/Select";
import InputBox from "../../components/InputBox/InputBox";
import Box from "@material-ui/core/Box";

const ProductStatus = () => {
  return (
    <div>
      <Nav>
        <div>
          <Select></Select>
          <DatePicker></DatePicker>
          <DatePicker />
        </div>

        <InputBox></InputBox>
        <Button>검색</Button>
        <PaginationTable></PaginationTable>
      </Nav>
    </div>
  );
};

export default withRouter(ProductStatus);
