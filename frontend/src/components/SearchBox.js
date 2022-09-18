import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [keyword, setkeyword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };
  return (
    <Form
      onSubmit={submitHandler}
      style={{ display: 'flex', gap: '1rem', margin: '0 1rem' }}
    >
      <Form.Control
        type="text"
        name="q"
        value={keyword}
        onChange={(e) => setkeyword(e.target.value)}
        placeholder="Search Products.."
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
