import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import { Dropdown } from './dropdown'
import { Registration } from './registration'
import { Login } from './login'
import { Button, Input, Card } from '../view'
import { connect } from 'react-redux'

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
            <User onClick={this.handleUserToggle}>Login/SignUp</User>
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
            <Input size="big" />
            <Button size="big">Search</Button>
          </Search>
        </Container>

        <Container>
          <h2>Popular</h2>
          <ContentGrid>
            {this.props.products.sneakers.map(sneaker => (
              <Card
                key={sneaker.id}
                img={sneaker.images[0]}
                caption={`${sneaker.brand} ${sneaker.coBrand} ${
                  sneaker.model
                } ${sneaker.color}`}
                price={sneaker.retail}
              />
            ))}
          </ContentGrid>

          <h2>Upcomming</h2>
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
  grid-template-columns: 5em 70em 5em;
`
const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  grid-column: 1 / span 1;
  align-self: center;
`
const User = styled(Button)`
  grid-column: 3 / span 1;
`
const LoginRegisterGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`
const mapStateToProps = state => ({
  products: state.rootReducer.products,
})
export default connect(mapStateToProps)(index)
