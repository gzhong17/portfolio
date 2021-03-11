import React, { Component } from 'react';
import Header from 'Header';
import { Base } from 'AmberComponent';
import { HeroSection, ProjectSection, ContactSection } from 'pages';
class HomePage extends Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <BodyContainer>
        <HeroSection />
        <ProjectSection />
        <ContactSection />
        </BodyContainer>
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  flex-direction: column;

`;

const BodyContainer = Base.extend`
  margin: ${props => (props.theme.isMobile ? '0 16px 16px 16px' : '0 40px 40px 40px')};
`;

export default HomePage;
