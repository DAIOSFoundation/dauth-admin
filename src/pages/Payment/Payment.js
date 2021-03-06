import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import SearchBox from "../../components/SearchBox/SearchBox";
import ResultText from "../../components/ResultTable/ResultText/ResultText";
import CheckBox from "../../components/CheckBox/CheckBox";
import PaymentCard from "../../components/TableCard/PaymentCard/PaymentCard";
import Pagination from "../../components/Pagination/Pagination";
import DefaultButton from "../../components/Button/DefaultButton";

const Payment = () => {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [postsArr, setPostsArr] = useState([]);
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    // const token = localStorage.getItem("token")
    console.log("Get 실행");
    fetch("/data/paymentdata.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setPostsArr(res.data);
        setTotal(res.data.length);
      });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsArr.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = () => {
    setSearch(true);
    console.log(search);
    console.log("시작날짜 : ", dateFrom);
    console.log("종료날짜 : ", dateTo);
    console.log("고객명 : ", input);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDateFrom = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateTo = (e) => {
    setDateTo(e.target.value);
  };

  return (
    <div>
      <Nav>
        <SearchBox
          handleDateFrom={handleDateFrom}
          handleDateTo={handleDateTo}
          handleSearch={handleSearch}
          handleInput={handleInput}
        >
          결제일
        </SearchBox>
        <ResultText total={total} dateFrom={dateFrom} dateTo={dateTo} />

        <ResultBox>
          <TableHead>
            <TableRow>
              <CheckBoxWrap>
                <CheckBox />
              </CheckBoxWrap>
              <PaymentCode>결제 코드</PaymentCode>
              <UserName>고객명</UserName>
              <UserEmail>Email</UserEmail>
              <PayAmount>결제 금액</PayAmount>
              <RegisterDate>가입일</RegisterDate>
              <Actions>Actions</Actions>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts &&
              currentPosts.map((list, idx) => (
                <PaymentCard
                  key={idx}
                  id={list.id}
                  paymentcode={list.paymentcode}
                  user={list.user}
                  email={list.email}
                  amount={list.amount}
                  date={list.date}
                />
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <PaginationWrap colSpan="7">
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={postsArr.length}
                  paginate={paginate}
                />
              </PaginationWrap>
              {/* <ButtonWrap colSpan="1">
                <DefaultButton>선택 삭제</DefaultButton>
              </ButtonWrap> */}
            </TableRow>
          </TableFooter>
        </ResultBox>
      </Nav>
    </div>
  );
};

export default withRouter(Payment);

const ResultBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  display: table;
  table-layout: fixed;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr`
  height: 50px;
`;

const CheckBoxWrap = styled.th`
  display: table-cell;
  vertical-align: middle;
  width: 10%;
`;

const PaymentCode = styled.th`
  display: table-cell;
  vertical-align: middle;
`;

const UserName = styled(PaymentCode)``;

const UserEmail = styled(PaymentCode)``;

const PayAmount = styled(PaymentCode)``;

const RegisterDate = styled(PaymentCode)``;

const Actions = styled(PaymentCode)``;

const TableBody = styled(TableHead)``;

const TableFooter = styled(TableHead)``;

const PaginationWrap = styled.td`
  height: 50px;
  vertical-align: middle;
  text-align: center;
  align-self: center;
`;

// const ButtonWrap = styled.td`
//   vertical-align: middle;
//   text-align: center;
//   button {
//     font-size: 12px;
//     height: 30px;
//   }
// `;
