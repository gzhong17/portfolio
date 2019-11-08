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
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectHeader>Who's Gloria?</ProjectHeader>
            <ParagraphText>
              An INFP that loves Forensic Files, Brooklyn 99, Sailormoon,
              anything lavender, has two cats, and 50+ houseplants!
            </ParagraphText>
            <Button
              className={classes.btn}
              size="medium"
              onClick={() => {
                window.open('http://instagram.com/growsomeshade');
              }}
            >
              See My Houseplants
            </Button>
            <Button
              className={classes.btn}
              size="medium"
              onClick={() => {
                window.open('http://instagram.com/my_junnie');
              }}
            >
              See My Cats
            </Button>
          </ContentCol>
          <ContentCol lgOffset={1} lg={7} md={4} sm={12} xs={12}>
            <ProjectHeroImg src={require('images/musers/musers-sample.png')} />
          </ContentCol>
        </SectionContainer>

        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProcessLabelText>The Process</ProcessLabelText>
            <ProcessContainer>
              <ProcessCol lg={1} md={1} sm={1} xs={1}>
                <ProcessImg src={require('images/musers/process-path.png')} />
              </ProcessCol>
              <ProcessCol lg={11} md={11} sm={11} xs={11}>
                <ParagraphText>
                  <ol>
                    <li>User Discovery</li>
                    <li>Ideate / Prototype</li>
                    <li>User Feedback</li>
                    <li>Build</li>
                    <li>Repeat 3 + 4 </li>
                    <li>Launch!</li>
                  </ol>
                </ParagraphText>
              </ProcessCol>
            </ProcessContainer>
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ParagraphText>
              <LabelText>Role</LabelText>
              Lead Product Designer in our team of 4
            </ParagraphText>
            <ParagraphText>
              <ul>
                <li>Product Management</li>
                <li>UX Research</li>
                <li>UX/UI Design</li>
              </ul>
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Tools Used</LabelText>
            <ParagraphText>
              <ul>
                <li>Sketch</li>
                <li>Invision</li>
                <li>React</li>
              </ul>
            </ParagraphText>
          </ContentCol>
        </SectionContainer>
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

const styles = theme => ({});

export default withStyles(styles, { withTheme: true })(
  withRouter(AboutDetails)
);
