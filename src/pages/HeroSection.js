import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  TitleHeader,
  ParagraphText,
  SecondaryHeader
} from 'AmberComponent';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

class HeroSection extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={7} md={6} sm={12} xs={12}>
            <TitleHeader>Hi there, I'm Gloria</TitleHeader>
            <SecondaryHeader>Empathetic Problem Solver</SecondaryHeader>
            <HeroParagraph>
              I'm passionate about translating user data into business measurable solutions, through the lens of
              empathy and critical thinking.
            </HeroParagraph>
            <Button
              size="medium"
              color="primary"
              onClick={() => {
                history.push('/about');
              }}
            >
              Who's Gloria?
            </Button>
          </ContentCol>
          <ContentCol lg={4} md={6} sm={12} xs={12}>
            <PortraitImg
              src={require('images/self-portrait-colour.png')}
            />
          </ContentCol>
        </IntroContainer>
        {/* <UpcomingContainer>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <SecondaryHeader>See What I'm Working On Lately</SecondaryHeader>
          </ContentCol>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <ArrowImg src={require('images/arrow.svg')} /> */}
            {/* <IconButton color="primary"> */}
            {/* <ArrowDownwardIcon style={{ fill: 'primary' }} /> */}
            {/* </IconButton> */}
          {/* </ContentCol>
        </UpcomingContainer> */}
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '16pt')};
`;
const IntroContainer = Row.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  margin-top: ${props => (props.theme.isMobile ? '36pt' : '0')};
`;
const UpcomingContainer = Base.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const HeroParagraph = ParagraphText.extend`
  font-size: ${props => (props.theme.isMobile ? '12pt' : '16pt')};
`;

const ContentCol = Col.extend`
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
`;

const PortraitImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '0' : '24pt')};
  width: ${props => (props.theme.isMobile ? '100%' : '250px')};
`;
const ArrowImg = styled.img`
  width: ${props => (props.theme.isMobile ? '50px' : '50px')};
`;

const styles = theme => ({
  margin: {
    margin: theme.spacing(1)
  }
});

export default withRouter(withStyles(styles, { withTheme: true })(HeroSection));
