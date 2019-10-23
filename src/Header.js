import React, { Component } from 'react';
import { Base, TitleHeader } from 'AmberComponent';
import styled from 'styled-components';
import './App.css';

class Header extends Component {
  render() {
    const { pageName } = this.props;
    return (
      <MainContainer>
        <LogoImg src={require('images/logo.svg')} />
        <MenuItem>Gloria Zhong</MenuItem>
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-right: ${props => (props.theme.isMobile ? '12pt' : '20pt')};
  height: ${props => (props.theme.isMobile ? '40px' : '50px')};
`;

const MenuItem = TitleHeader.extend`
  color: ${props => props.theme.primaryColor};
  margin: 0;
`;

export default Header;
