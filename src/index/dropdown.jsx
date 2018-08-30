import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${props => props.show ? 'block' : 'none' };
`;
const Body = styled.div`
  background: #fff;
  margin: 5em auto 0;
  border-radius: .5em;
  width: 80em;
  min-height: 20em;
  position: relative;
  border: 1px solid #222;
  padding: 3em;
`;
const ButtonClose = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  font-weight: bold;
`;

export const Dropdown = ({ open, handleClose, children }) => {
  const stop = e => e.stopPropagation();
  return (
    <Backdrop show={open} onClick={handleClose}>
      <Body onClick={stop}>
        <ButtonClose onClick={handleClose}>X</ButtonClose>
        {children}
      </Body>
    </Backdrop>
  )
}
