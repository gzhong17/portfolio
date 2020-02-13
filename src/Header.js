import React, { Component } from 'react';
import { Base, SectionHeader, HomeLinkText } from 'AmberComponent';
import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './App.css';

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MainContainer>
        <ContentCol>
          <HomeLinkText href="/portfolio/" style={{ marginBottom: '0' }}>
            <LogoImg src={require('images/logo.svg')} />
          </HomeLinkText>
          <HomeLinkText href="/portfolio/" style={{ marginBottom: '0' }}>
            <MenuItem>Gloria Zhong</MenuItem>
          </HomeLinkText>
        </ContentCol>
        <MenuCol>
          <NavLink
            smooth
            to="/#projects"
            style={{ textDecoration: 'none', marginLeft: '16pt' }}
          >
            <MenuItem>Projects</MenuItem>
          </NavLink>
          <NavLink
            smooth
            to="/#contact"
            style={{
              textDecoration: 'none',
              marginLeft: '16pt'
            }}
          >
            <MenuItem>Contact</MenuItem>
          </NavLink>
          <NavLink
            to="/about"
            style={{ textDecoration: 'none', marginLeft: '16pt' }}
          >
            <MenuItem>About</MenuItem>
          </NavLink>
        </MenuCol>
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  align-items: center;
  padding-right: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  justify-content: space-between;
  margin-bottom: ${props => (props.theme.isMobile ? '0' : '48pt')};
`;

const LogoImg = styled.img`
  margin-right: ${props => (props.theme.isMobile ? '12pt' : '20pt')};
  height: ${props => (props.theme.isMobile ? '40px' : '50px')};
`;

const ContentCol = Col.extend`
  display: flex;
  align-items: center;
`;
const MenuCol = Col.extend`
  display: ${props => (props.theme.isMobile ? 'none' : 'flex')};
`;

const MenuItem = SectionHeader.extend`
  margin: 0;
  color: ${props => props.theme.primaryColor};
`;

const styles = theme => ({});

export default Header;
