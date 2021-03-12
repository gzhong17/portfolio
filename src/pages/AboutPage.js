import React, { Component } from 'react';
import Header from 'Header';
import { withStyles } from '@material-ui/core/styles';
import { Base } from 'AmberComponent';
import { AboutDetails, MoreProjectSection, ContactProjectSection } from 'pages';

class AboutPage extends Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <BodyContainer>
        <AboutDetails />
        <MoreProjectSection />
        <ContactProjectSection />
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

const styles = theme => ({});

export default withStyles(styles, { withTheme: true })(AboutPage);
