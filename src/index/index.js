import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import { Dropdown } from './dropdown'
import { Registration } from './user/registration'
import { Login } from './user/login'
import { Card } from '../view'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { Button, SearchInput, Heading } from 'evergreen-ui'

class index extends Component {
  state = {
    userDropdownOpen: false,
  }
  handleUserToggle = e => {
    this.setState({ userDropdownOpen: !this.state.userDropdownOpen })
  }
  render() {
    return (
      <div>
        <Container>
          <Header>
            <Logo src={logo} />
            <User>
              <Button
                onClick={this.handleUserToggle}
                iconBefore="user"
                appearance="minimal"
              >
                Login/SignUp
              </Button>
            </User>
            <Dropdown
              open={this.state.userDropdownOpen}
              handleClose={this.handleUserToggle}
            >
              <LoginRegisterGrid>
                <Login />
                <Registration />
              </LoginRegisterGrid>
            </Dropdown>
          </Header>
        </Container>

        <Container>
          <Search>
            <SearchInput />
          </Search>
        </Container>

        <Container>
          <Heading size={800}>Popular</Heading>
          <ContentGrid>
            {this.props.products.sneakers.map(sneaker => (
              <Link to={`/product/${sneaker.id}`} key={sneaker.id}>
                <Card
                  img={sneaker.images[0]}
                  caption={`${sneaker.brand} ${sneaker.coBrand} ${
                    sneaker.model
                  } ${sneaker.color}`}
                  price={sneaker.retail}
                />
              </Link>
            ))}
          </ContentGrid>

          <Heading size={800}>Upcomming</Heading>
          <ContentGrid>
            <Card price={110} />
            <Card price={110} />
            <Card price={110} />
          </ContentGrid>
        </Container>
      </div>
    )
  }
}

const Search = styled.div`
  text-align: center;
`
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5em;
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
const mapStateToProps = state => ({
  products: state.rootReducer.products,
})
export default connect(mapStateToProps)(index)
