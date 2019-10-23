import React, { Component } from 'react';
import Header from 'Header';
import { Base } from 'AmberComponent';
import { HeroSection } from 'pages';
class HomePage extends Component {
  render() {
    return (
      <MainContainer>
        <Header pageName="home page" />
        <HeroSection />
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  flex-direction: column;
`;

export default HomePage;
