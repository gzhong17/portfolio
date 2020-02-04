import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  ImgLabelText,
  ProjectHeader,
  ParagraphText,
  SectionHeader,
  LabelText
} from 'AmberComponent';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import StarsIcon from '@material-ui/icons/Stars';

class AboutDetails extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer>
        <SectionContainer>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <ProjectHeader>Who's Gloria?</ProjectHeader>
            <ParagraphText>
              I always say if I weren’t a UX designer, I would’ve been a
              detective or a counsellor. Thankfully, UX and product design
              brings the best of both worlds, allowing me to create impactful
              solutions by using empathy to solve clues left by users.
            </ParagraphText>
            <ParagraphText>
              When I’m not designing, I’m either watching Forensic Files or
              tending to my houseplants. I’m also passionate about mental health
              and personal development, so you’ll hear me chatting away about
              team building and culture!
            </ParagraphText>
            <Button
              className={classes.btn}
              size="medium"
              color="primary"
              onClick={() => {
                window.open('http://instagram.com/growsomeshade');
              }}
            >
              Check Out My Houseplants
            </Button>
          </ContentCol>
          <ContentCol lgOffset={1} lg={3} mdOffset={1} md={3} sm={12} xs={12}>
            <PortraitImg src={require('images/about-self.jpg')} />
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <SectionHeader>Design Principles I Live By</SectionHeader>
          </ContentCol>
        </SectionContainer>
        <PrinciplesContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ParagraphText>
              <LabelText>Empathy is Key</LabelText>
            </ParagraphText>
            <ParagraphText>
              The usefulness of a design really depends on the user and
              stakeholder needs, not a prescription of what you assume is best
              for them. Treat design as an ego-free zone.
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ParagraphText>
              <LabelText>Always Know Your User</LabelText>
            </ParagraphText>
            <ParagraphText>
              Live and breathe in data to understand who you’re designing for.
              Influence others on your team to do the same, because we’re all
              responsible for our user. Let the data speak on behalf of the
              user.
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>North Star Vision</LabelText>
            <ParagraphText>
              What differentiates a good designer from a great one is the
              ability to step back and ask “How does this design impact our
              greater vision?” Let your design decisions bring you closer to the
              main goal.
            </ParagraphText>
          </ContentCol>
        </PrinciplesContainer>
      </MainContainer>
    );
  }
}

const MainContainer = Base.extend`
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  flex-direction: column;
  padding-left: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  padding-right: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
`;
const SectionContainer = Row.extend`
  display: flex;
  margin-top: ${props => (props.theme.isMobile ? '12pt' : '24pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '24pt')};
`;

const PrinciplesContainer = SectionContainer.extend`
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '124pt')};
`;

const NuggetContainer = Row.extend`
  display: flex;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '16pt')};
  align-items: center;
`;

const NuggetLabel = LabelText.extend`
  margin-bottom: 0;
  margin-left: 8px;
`;

const ContentCol = Col.extend``;

const ColContainer = Row.extend`
  display: flex;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '16pt')};
`;

const InnerCol = Col.extend``;

const ProcessContainer = Row.extend`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.theme.isMobile ? '8pt' : '0pt')};
`;

const ProcessLabelText = LabelText.extend`
  margin-bottom: ${props => (props.theme.isMobile ? '0pt' : '16pt')};
`;

const ProcessCol = Col.extend``;

const ProjectHeroImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '12pt' : '0')};
  width: ${props => (props.theme.isMobile ? '100%' : '80%')};
`;
const ProjectImg = styled.img`
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
  width: ${props => (props.theme.isMobile ? '100%' : '100%')};
`;

const ProcessImg = styled.img`
  width: ${props => (props.theme.isMobile ? '18px' : '18px')};
`;

const PortraitImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '0' : '24pt')};
  width: ${props => (props.theme.isMobile ? '100%' : '400px')};
`;

const styles = theme => ({});

export default withStyles(styles, { withTheme: true })(
  withRouter(AboutDetails)
);
