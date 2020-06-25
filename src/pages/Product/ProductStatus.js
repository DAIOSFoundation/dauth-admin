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
import CheckBox from "../../components/CheckBox/CheckBox";

const ProductStatus = () => {
  return (
    <div>
      <Nav>
        <SearchBox>
          <PeriodWrap>
            <PeriodText>기간</PeriodText>
            <Select />
            <DatePicker />
            <PeriodText>~</PeriodText>
            <DatePicker />
          </PeriodWrap>
          <PeriodWrap>
            <PeriodText>고객명</PeriodText>
            <InputBox />
          </PeriodWrap>
          <ButtonWrap>
            <Button>검색</Button>
          </ButtonWrap>
        </SearchBox>

        <PaginationTable></PaginationTable>
      </Nav>
    </div>
  );
};

export default withRouter(ProductStatus);

const SearchBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
`;

const PeriodWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
`;

const PeriodText = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 50px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
