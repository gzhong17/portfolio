import React, { Component } from 'react';
import Header from 'Header';
import { Base } from 'AmberComponent';
import { HeroSection, ProjectSection, ContactSection } from 'pages';
class HomePage extends Component {
  render() {
    return (
      <MainContainer>
        <Header pageName="home page" />
        <HeroSection />
        <ProjectSection />
        <ContactSection />
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  flex-direction: column;
  margin: ${props => (props.theme.isMobile ? '16px' : '40px')};
`;

export default HomePage;
