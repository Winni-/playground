import styled from 'styled-components'

export const BigButton = styled.button`
  width: 10rem;
  background-color: #eee;
  border-radius: 3px;
  text-align: center;
  padding: 5px 10px;
  font-size: 2em;
  transition: 0.15s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: #eee;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
      inset 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`
