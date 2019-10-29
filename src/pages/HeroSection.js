import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  TitleHeader,
  ParagraphText,
  SecondaryHeader,
  LabelText
} from 'AmberComponent';
import { IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

class HeroSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MainContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={6} md={6} sm={12} xs={12}>
            <HeroTitleHeader>Hi there, I'm Gloria</HeroTitleHeader>
            <SubLabelText>Product Designer</SubLabelText>
            <HeroParagraph>
              Working in UX for the past 6 years, I’ve been passionate about
              translating user data into valuable solutions, through the lens of
              empathy and critical thinking.
            </HeroParagraph>
          </ContentCol>
          <ContentCol lg={5} md={6} sm={12} xs={12}>
            <PortraitImg
              src={require('images/self-portrait-circle-mono.png')}
            />
          </ContentCol>
        </IntroContainer>
        <UpcomingContainer>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <SecondaryHeader>See What I'm Working On Lately</SecondaryHeader>
          </ContentCol>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <ArrowImg src={require('images/arrow.svg')} />
            {/* <IconButton color="primary"> */}
            {/* <ArrowDownwardIcon style={{ fill: 'primary' }} /> */}
            {/* </IconButton> */}
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
  font-size: ${props => (props.theme.isMobile ? '16pt' : '20pt')};
  line-height: 120%;
`;

const HeroTitleHeader = TitleHeader.extend`
  font-size: ${props => (props.theme.isMobile ? '24pt' : '36pt')};
`;

const SubLabelText = LabelText.extend`
  font-size: ${props => (props.theme.isMobile ? '16pt' : '24pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '16pt' : '24pt')};
`;

const ContentCol = Col.extend``;

const PortraitImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '12pt' : '24pt')};
  width: ${props => (props.theme.isMobile ? '100%' : '400px')};
`;
const ArrowImg = styled.img`
  width: ${props => (props.theme.isMobile ? '50px' : '50px')};
`;

const styles = theme => ({
  margin: {
    margin: theme.spacing(1)
  }
});

export default withStyles(styles, { withTheme: true })(HeroSection);
