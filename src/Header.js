import React, { Component } from 'react';
import { Base, MenuHeader, HomeLinkText } from 'AmberComponent';
import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './App.css';
import './main.css';

class Header extends Component {

  state ={className:"" };
  
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  
  handleScroll=()=>{
    if (window.pageYOffset > 0) {
        if(!this.state.className){
          this.setState({ className: "scroll" });   
        }
    }else{
        if(this.state.className){
          this.setState({ className: "" });
        }
    }
  }

  render() {
    const { classes } = this.props;



    return (
      <MainContainer className={this.state.className}>
        <ContentCol>
          <HomeLinkText href="/" style={{ marginBottom: '0' }}>
            <LogoImg src={require('images/logo.svg')} />
          </HomeLinkText>
          <HomeLinkText href="/" style={{ marginBottom: '0' }}>
            <MenuItem>Gloria Zhong</MenuItem>
          </HomeLinkText>
        </ContentCol>
        <MenuCol>
          <NavLink
            smooth
            to="/#projects"
            style={{ textDecoration: 'none', marginLeft: '28pt' }}
          >
            <MenuItem>Projects</MenuItem>
          </NavLink>
          <NavLink
            smooth
            to="/#contact"
            style={{
              textDecoration: 'none',
              marginLeft: '28pt'
            }}
          >
            <MenuItem>Contact</MenuItem>
          </NavLink>
          <NavLink
            to="/about"
            style={{ textDecoration: 'none', marginLeft: '28pt' }}
          >
            <MenuItem>About</MenuItem>
          </NavLink>
        </MenuCol>
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  /* background-color: ${props => props.theme.whiteColor}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  margin-bottom: ${props => (props.theme.isMobile ? '0' : '48pt')};
  padding: ${props => (props.theme.isMobile ? '16px 12pt' : '16px 32px')};
  background-color: #ffffff;
  z-index: 99;


`;

const LogoImg = styled.img`
  margin-right: ${props => (props.theme.isMobile ? '12pt' : '20pt')};
  height: ${props => (props.theme.isMobile ? '40px' : '40px')};
`;

const ContentCol = Col.extend`
  display: flex;
  align-items: center;
`;
const MenuCol = Col.extend`
  display: ${props => (props.theme.isMobile ? 'none' : 'flex')};
`;

const MenuItem = MenuHeader.extend`
  margin: 0;
  color: ${props => props.theme.primaryColor};
`;

const styles = theme => ({});

export default Header;
