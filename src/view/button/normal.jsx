import styled from 'styled-components'
export const NormalButton = styled.button`
  border: 1px solid darkgray;
  text-align: center;
  padding: 5px 10px;
  width: 6rem;
  max-width: 100%;
  transition: 0.1s;
  border-radius: 2px;
  text-transform: uppercase;
  overflow: hidden;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
      inset 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`
