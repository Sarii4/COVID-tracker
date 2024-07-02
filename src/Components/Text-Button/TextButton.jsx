import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #00008b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 20px;

  &:hover {
    background-color: #0000cd;
  }
`;

const TextButton = ({ children }) => {
  return (
    <Button>
      {children}
    </Button>
  );
};

export default TextButton;
