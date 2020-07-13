import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import SearchBox from "../../components/SearchBox/SearchBox";
import ResultText from "../../components/ResultTable/ResultText/ResultText";
import CheckBox from "../../components/CheckBox/CheckBox";
import UserCard from "../../components/TableCard/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import DefaultButton from "../../components/Button/DefaultButton";
import url from "../../config";
import * as CUSTOMER from "../../libs/api/customer";
import * as customerActions from "../../store/modules/customer/actions";

const Customer = () => {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [postsArr, setPostsArr] = useState([]);
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   console.log("Get 실행");
  //   fetch("/data/userdata.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.data);
  //       setPostsArr(res.data);
  //       setTotal(res.data.length);
  //     });
  // }, []);

  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // console.log("Get 실행");
    // CUSTOMER.getCustomer(setPostsArr, setTotal);
    // setPostsArr(res.data.data);
    // setTotal(res.data.data.length);
    // setPostsArr(res.data.data);
    // setTotal(res.data.data.length);
    // axios.get("/data/userdata.json").then((res) => {
    //   console.log(res.data);
    //   setPostsArr(res.data.data);
    //   setTotal(res.data.data.length);
    // });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = postsArr.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { startDate, endDate, name } = useSelector(
    () => ({
      startDate: dateFrom,
      endDate: dateTo,
      name: input,
    }),
    shallowEqual
  );

  const handleSearch = useCallback(() => {
    // setSearch(true);
    console.log("시작날짜 : ", dateFrom);
    console.log("종료날짜 : ", dateTo);
    console.log("고객명 : ", input);
    console.log("Post 실행");
    const params = {
      startDate,
      endDate,
      name,
    };
    dispatch(customerActions.post_customer(params));

    // const token = localStorage.getItem("access_token");
    // axios
    //   .post(
    //     "/data/userdata.json",
    //     { startDate: "dateFrom", endDate: "dateTo", name: "input" },
    //     {
    //       headers: {
    //         // "Content-Type": "application/json",
    //         // Authorization: token,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
    // .catch((err) => {
    //   console.log(err);
    // });
  }, [startDate, endDate, name]);

  const handleInput = (e) => {
    setInput(e.target.value);
    dispatch(customerActions.change_name(input));
  };

  const handleDateFrom = (e) => {
    setDateFrom(e.target.value);
    dispatch(customerActions.change_startDate(dateFrom));
  };

  const handleDateTo = (e) => {
    setDateTo(e.target.value);
    dispatch(customerActions.change_endDate(dateTo));
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
          가입일
        </SearchBox>
        <ResultText total={total} dateFrom={dateFrom} dateTo={dateTo} />

        <ResultBox>
          <TableHead>
            <TableRow>
              <CheckBoxWrap>
                <CheckBox />
              </CheckBoxWrap>
              <UserCode>고객 코드</UserCode>
              <UserName>고객명</UserName>
              <UserEmail>Email</UserEmail>
              <RegisterDate>가입일</RegisterDate>
              <Actions>Actions</Actions>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts &&
              currentPosts.map((list, idx) => (
                <UserCard
                  key={idx}
                  id={list.id}
                  usercode={list.id}
                  user={list.user}
                  email={list.email}
                  createdAt={list.createdAt}
                />
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <PaginationWrap colSpan="6">
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

export default withRouter(Customer);

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

const UserCode = styled.th`
  display: table-cell;
  vertical-align: middle;
`;

const UserName = styled(UserCode)``;

const UserEmail = styled(UserCode)``;

const RegisterDate = styled(UserCode)``;

const Actions = styled(UserCode)``;

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
