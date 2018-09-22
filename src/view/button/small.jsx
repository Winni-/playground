import styled from 'styled-components'
export const SmallButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  text-align: center;
  transition: 0.1s;
  &:hover {
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(1, 1, 1, 0) 80%
    );
  }
  &:active {
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 80%
    );
  }
`
