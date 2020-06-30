import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import InputBox from "../../components/InputBox/InputBox";
import DatePickerFrom from "../../components/DatePicker/DatePickerFrom";
import DatePickerTo from "../../components/DatePicker/DatePickerTo";

const SearchBox = ({
  children,
  handleSearch,
  handleInput,
  handleDateFrom,
  handleDateTo,
}) => {
  return (
    <SearchBoxWrap>
      <PeriodWrap>
        <PeriodText>기간</PeriodText>
        <Select>{children}</Select>
        <DatePickerFrom handleDateFrom={handleDateFrom}>
          시작날짜
        </DatePickerFrom>
        <PeriodText>~</PeriodText>
        <DatePickerTo handleDateTo={handleDateTo}>종료날짜</DatePickerTo>
      </PeriodWrap>
      <PeriodWrap>
        <PeriodText>고객명</PeriodText>
        <InputWrap>
          <InputBox handleInput={handleInput} />
        </InputWrap>
      </PeriodWrap>
      <ButtonWrap>
        <Button handleSearch={handleSearch}>검색</Button>
      </ButtonWrap>
    </SearchBoxWrap>
  );
};

export default withRouter(SearchBox);

const SearchBoxWrap = styled.div`
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
  }
`;

const InputWrap = styled.div`
  width: 120px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
