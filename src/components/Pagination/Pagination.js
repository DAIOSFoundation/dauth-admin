import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationBox>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      ))}
    </PaginationBox>
  );
};

export default Pagination;

const PaginationBox = styled.ul`
  display: flex;
  justify-content: center;
  button {
    border: none;
    font-size: 14px;
    padding: 7px;
    margin: 5px;
    background-color: white;
  }
`;
