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
        <AboutDetails />
        <MoreProjectSection />
        <ContactProjectSection />
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

const styles = theme => ({});

export default withStyles(styles, { withTheme: true })(AboutPage);
