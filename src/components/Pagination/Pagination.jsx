import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 20px;
  li {
    padding: 0px 8px;
  }

  .page-link {
    color: #333;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
  }

  .page-link:hover {
    color: #666;
    background-color: #4ccc65;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }

  .page-item.active .page-link {
    color: #4ccc65;
    font-weight: bold;
  }
`;
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  //href="!#"
  return (
    <PaginationWrapper>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} className="page-link">
            {number}
          </a>
        </li>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
