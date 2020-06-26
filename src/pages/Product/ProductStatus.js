import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import DatePicker from "../../components/DatePicker/DatePicker";
import PaginationTable from "../../components/Table/PaginationTable/PaginationTable";
import Select from "../../components/Select/Select";
import InputBox from "../../components/InputBox/InputBox";
import CheckBox from "../../components/CheckBox/CheckBox";
import TableCard from "../../components/TableCard/TableCard";

const ProductStatus = () => {
  const [pagination, setPagination] = useState(1);

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
        <ResultText>검색 결과 13건 (기간: 2020-05-30 ~ 2020-06-20)</ResultText>
        <ResultBox>
          <TableHead>
            <TableRow>
              <CheckBoxWrap>
                <CheckBox />
              </CheckBoxWrap>
              <ProductName>상품명</ProductName>
              <RegisterDate>등록일</RegisterDate>
              <Actions>Actions</Actions>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCard />

            <TableCard />

            <TableCard />

            <TableCard />

            <TableCard />

            <TableCard />

            <TableCard />

            <TableCard />

            <TableCard />
          </TableBody>
          <TableFooter>
            <TableRow>
              <Pagination colSpan="4">1~5 of 13</Pagination>
            </TableRow>
          </TableFooter>
        </ResultBox>
        {/* <PaginationTable></PaginationTable> */}
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
  padding: 20px;
`;

const ResultText = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 10px 30px 0 30px;
`;

const ResultBox = styled(SearchBox)`
  display: table;
  table-layout: fixed;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr`
  border-bottom: 1px solid black;
  height: 50px;
`;

const CheckBoxWrap = styled.th`
  display: table-cell;
  vertical-align: middle;
  width: 10%;
`;

const ProductName = styled.th`
  display: table-cell;
  vertical-align: middle;
`;

const RegisterDate = styled(ProductName)``;

const Actions = styled(ProductName)``;

const TableBody = styled(TableHead)``;

const TableFooter = styled(TableBody)``;

const Pagination = styled.td`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;
