import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((el) => (
          <Pagination.Item
            key={el + 1}
            active={el + 1 === page}
            href={
              keyword ? `/search/${keyword}/page/${el + 1}` : `/page/${el + 1}`
            }
          >
            {el + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
