import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const ResultText = ({ total, dateFrom, dateTo }) => {
  return (
    <ResultTextBox>
      검색 결과 {total}건 (기간: {dateFrom} ~ {dateTo})
    </ResultTextBox>
  );
};

export default withRouter(ResultText);

const ResultTextBox = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 10px 30px 0 30px;
`;
