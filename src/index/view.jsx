import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import { Dropdown } from './dropdown'
import { Registration } from './user/registration'
import { Login } from './user/login'
import { Button, Heading, SearchInput } from 'evergreen-ui'
import { Products } from './products'
import { Link } from 'react-router-dom'

export const View = ( { userDropdownOpen, handleUserToggle, products } ) =>{
  return (
    <div>
      <Container>
        <Header>
          <Logo src={ logo }/>
          <User>
            <Link to='/user'>user</Link>
            <Button
              onClick={ handleUserToggle }
              iconBefore="user"
              appearance="minimal"
            >
              Login/SignUp
            </Button>
          </User>
          <Dropdown
            open={ userDropdownOpen }
            handleClose={ handleUserToggle }
          >
            <LoginRegisterGrid>
              <Login/>
              <Registration/>
            </LoginRegisterGrid>
          </Dropdown>
        </Header>
      </Container>
      
      <Container>
        <Search>
          <SearchInput/>
        </Search>
      </Container>
      
      <Container>
        <Heading size={ 800 }>Products</Heading>
        <Products products={ products }/>
      </Container>
    </div>
  )
}

const Search = styled.div`
  text-align: center;
`
const Container = styled.div`
  max-width: 80em;
  margin: 0 auto;
`
const Header = styled.header`
  height: 5em;
  display: grid;
  grid-template-columns: 5em auto 10em;
`
const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  grid-column: 1 / span 1;
  align-self: center;
`
const User = styled.div`
  grid-column: 3 / span 1;
  text-align: right;
  padding: 1.5em;
`
const LoginRegisterGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`