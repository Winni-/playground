import React from 'react'
import { connect } from 'react-redux'
import universal from 'react-universal-component'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0 % {  
    transform: rotate(0deg);
  }
  100 % {
    transform: rotate(360deg);
  }
`
const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  & > div {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #141414;
    border: 1px solid rgb(30,30,30);
    box-sizing: border-box;
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #373737;
    background: linear-gradient(to right, rgb(220, 44, 48) 10%, rgba(55,55,55,0) 42%);
    position: relative;   
    animation: ${rotate} 1.4s infinite linear;
    transform: translateZ(0);
  }
  & > div:before {
    width: 50%;
    height: 50%;
    background: rgb(220, 44, 48);
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  & > div:after {
    background: rgb(49, 71, 79);
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}`

const Spinner = () => (
  <SpinnerContainer>
    <div />
  </SpinnerContainer>
)

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  minDelay: 500,

  loading: () => <Spinner />,

  error: () => <div>PAGE NOT FOUND - 404</div>,
})

const switcher = ({ page }) => {
  return (
    <div>
      <UniversalComponent page={page} />
    </div>
  )
}

const mapStateToProps = state => ({
  page: state.rootReducer.location,
})

export const Switcher = connect(mapStateToProps)(switcher)
