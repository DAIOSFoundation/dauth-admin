import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import CheckBox from "../../components/CheckBox/CheckBox";
import ProductCard from "../../components/TableCard/ProductCard/ProductCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import DefaultButton from "../../components/Button/DefaultButton";
import Pagination from "../../components/Pagination/Pagination";
import ResultText from "../../components/ResultTable/ResultText/ResultText";

const ProductStatus = () => {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [postsArr, setPostsArr] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [checkBox, setCheckBox] = useState(false);
  const [checkBoxEach, setCheckBoxEach] = useState(false);
  const [index, setIndex] = useState(0);
  const [handleId, setHandleId] = useState(0);
  // const token = localStorage.getItem("access_token");

  // console.log("token: ", token);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log("Get 실행");
    fetch("/data/data.json")
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

  const handleCheckBox = (e) => {
    setCheckBox(e.target.checked);

    if (checkBox) {
      setCheckBoxEach(false);
    } else if (!checkBox) {
      setCheckBoxEach(true);
    }
    // console.log(checkBox);
    // console.log(checkBoxEach);
  };

  const handleCheckBoxEach = (id, idx, e) => {
    // setIndex(idx);
    // setHandleId(id);
    // console.log("idx : ", index);
    // console.log("id : ", handleId);
    // if (index === id) {
    //   setCheckBoxEach(e.target.checked);
    // }
    // if (checkBoxEach) {
    //   setCheckBox(false);
    // } else if (!checkBoxEach) {
    //   setCheckBox(true);
    // }
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
          등록일
        </SearchBox>
        <ResultText total={total} dateFrom={dateFrom} dateTo={dateTo} />

        <ResultBox>
          <TableHead>
            <TableRow>
              <CheckBoxWrap>
                <CheckBox handleCheckBox={handleCheckBox} checkBox={checkBox} />
              </CheckBoxWrap>
              <ProductName>상품명</ProductName>
              <RegisterDate>등록일</RegisterDate>
              <Actions>Actions</Actions>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts &&
              currentPosts.map((list, idx) => (
                <ProductCard
                  key={idx}
                  idx={idx}
                  id={list.id}
                  title={list.title}
                  date={list.date}
                  checkBoxEach={checkBoxEach}
                  handleCheckBoxEach={handleCheckBoxEach}
                />
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <PaginationWrap colSpan="4">
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

export default withRouter(ProductStatus);

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

const ProductName = styled.th`
  display: table-cell;
  vertical-align: middle;
`;

const RegisterDate = styled(ProductName)``;

const Actions = styled(ProductName)``;

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
