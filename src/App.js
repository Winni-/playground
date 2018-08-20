import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Dropdown } from './organisms/dropdown';
import { Registration } from './organisms/registration';
import { Login } from './organisms/login';

export default class App extends Component {
  state = {
    userDropdownOpen: false
  };
  handleUserToggle = e => {
    this.setState({userDropdownOpen: !this.state.userDropdownOpen});
  };
  render() {
    return (
      <div className="App">
        <Container>
          <Header>
            <Logo src={logo} />
            <User onClick={this.handleUserToggle}>Login/SignUp</User>
          </Header>
        </Container>

        <Container>
          <Search>
            <input placeholder="Search" type="search" />
            <button>Search</button>
          </Search>
        </Container>
        <Suggestions></Suggestions>

        <Container>
         
            <h3>Popular</h3>
            <ContentGrid>
              <Item>
                <img src="" alt="" />
                <h5>Nike x Acronym Vapormax</h5>
                <div>White/Volt</div>
                <div>$140</div>
              </Item>
            </ContentGrid>

            <h3>Upcomming</h3>
            <ContentGrid>

            </ContentGrid>
        </Container>
        <Dropdown open={this.state.userDropdownOpen} handleClose={this.handleUserToggle}>
          <LoginRegisterGrid>
            <Login></Login>
            <Registration></Registration>
          </LoginRegisterGrid>
        </Dropdown>
      </div>
    );
  }
};


const Search = styled.div`
  grid-column: 3 / span 1;
`;
const Suggestions = props => (<div>{props.children}</div>);
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5em;
`;
const Item = props => (<div>{props.children}</div>);
const Container = styled.div`
  max-width: 80em;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 5em;
  display: grid;
  grid-template-columns: 5em 70em 5em;
`;
const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  grid-column: 1 / span 1;
  align-self: center;
`;
const User = styled.button`
  grid-column: 3 / span 1;
`;
const LoginRegisterGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;