import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Base, TitleHeader, ParagraphText, LabelText } from 'AmberComponent';
import { IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

class HeroSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MainContainer>
        <IntroContainer>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <TitleHeader>Hi there, I'm Gloria</TitleHeader>
            <ParagraphText>
              I’m a product designer, passionate about translating user data
              into valuable solutions, through the lens of empathy and critical
              thinking.
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <LogoImg src={require('images/logo.svg')} />
          </ContentCol>
        </IntroContainer>
        <UpcomingContainer>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <LabelText>See What I'm Working On Lately</LabelText>
          </ContentCol>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <IconButton color="primary" className={classes.iconButton}>
              <ArrowDownwardIcon style={{ fill: 'primary' }} />
            </IconButton>
          </ContentCol>
        </UpcomingContainer>
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  flex-direction: column;
  margin: ${props => (props.theme.isMobile ? '16px' : '36px')};
`;
const IntroContainer = Base.extend`
  display: flex;
  flex-direction: row;
`;
const UpcomingContainer = Base.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ContentCol = Col.extend``;

const LogoImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '12pt' : '24pt')};
  height: ${props => (props.theme.isMobile ? '40px' : '50px')};
`;

const styles = theme => ({
  iconButton: {}
});

export default withStyles(styles, { withTheme: true })(HeroSection);
