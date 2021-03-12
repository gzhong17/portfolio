import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  ParagraphText,
  SectionHeader,
  UnorderedList
} from 'AmberComponent';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

class ProjectSection extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer id="projects">
        {/* <IntroContainer>
          <ContentCol lgOffset={1} lg={5} md={5} sm={11} xs={12}>
          <ProjectImg src={require('images/goodbits/goodbits-cover.png')} />
            <ProjectHeader>Goodbits Newsletter Builder</ProjectHeader>
            <ParagraphText>
              Goodbits is a newsletter curation and editor tool that transforms avid readers &amp; writers into thought leaders.
            </ParagraphText>
            <UnorderedList>
              <li>Product Management</li>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList> */}
            {/* <Button
              size="medium"
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/goodbits');
              }}
            >
              See My Process
            </Button> */}
            
          {/* </ContentCol> */}
          {/* <ContentCol lg={5} md={5} sm={11} xs={12}>
            <ProjectImg src={require('images/musers/musers-cover.png')} />
            <ProjectHeader>Musers by MuseFind</ProjectHeader>
            <ParagraphText>
              Musers is an online influencer portfolio platform, where
              influencers can fully showcase their professionalism and value.
            </ParagraphText>
            <UnorderedList>
              <li>Product Management</li>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList>
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/musers');
              }}
            >
              See My Process
            </Button>
          </ContentCol>
        </IntroContainer> */}

        <IntroContainer>
          <ContentCol lgOffset={1} lg={5} md={5} sm={11} xs={12}>
            <ProjectHeader>Goodbits Newsletter Builder</ProjectHeader>
            <ParagraphText>
              Goodbits is a newsletter curation and editor tool that transforms avid readers &amp; writers into thought leaders.
            </ParagraphText>
            <UnorderedList>
              <li>Product Management</li>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList>
            {/* <Button
              size="medium"
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/goodbits');
              }}
            >
              See My Process
            </Button> */}
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <ProjectImg src={require('images/goodbits/goodbits-cover.png')} />
          </ContentCol>
        </IntroContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={5} md={5} sm={11} xs={12}>
            <ProjectHeader>Musers by MuseFind</ProjectHeader>
            {/* <LabelText>Influencer Online Portfolio</LabelText> */}
            <ParagraphText>
              Musers is an online influencer portfolio platform, where
              influencers can fully showcase their professionalism and value.
            </ParagraphText>
            <UnorderedList>
              <li>Product Management</li>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList>
            {/* <ParagraphText>
              <a href="http://musers.co" alt="Link to Musers website">
                Link to Platform
              </a>
            </ParagraphText> */}
            {/* <LabelText>
              [My process is under construction, please visit soon!]
            </LabelText> */}

            {/* <Button
              size="medium"
              variant="outlined"
              color="primary"
              onClick={() => {
                window.open('/portfolio/documents/musers-process.pdf');
              }}
            >
              See My Process
            </Button> */}
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/musers');
              }}
            >
              See My Process
            </Button>
            {/* <Button
              className={classes.btn}
              size="medium"
              color="primary"
              onClick={() => {
                window.open('http://musers.co');
              }}
            >
              See It In Action
            </Button> */}
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <ProjectImg src={require('images/musers/musers-cover.png')} />
          </ContentCol>
        </IntroContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={5} md={5} sm={11} xs={12}>
            <ProjectHeader>Fraser Health Workspace</ProjectHeader>
            {/* <LabelText>Influencer Online Portfolio</LabelText> */}
            <ParagraphText>
              The Fraser Health SharePoint Workspaces allows 26K+ Fraser Health
              employees in the Vancouver lower mainland to access request forms,
              training and support, and upcoming news.
            </ParagraphText>
            <UnorderedList>
              <li>Project Management</li>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList>
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push('/fraserhealth');
              }}
            >
              See My Process
            </Button>
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <ProjectImg
              src={require('images/fraserhealth/fraserhealth-cover.png')}
            />
          </ContentCol>
        </IntroContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={5} md={5} sm={11} xs={12}>
            <ProjectHeader>Flexride Car Sharing</ProjectHeader>
            <ParagraphText>
              Flexride is a car sharing aggregator mobile app that aims to
              provide a unified transportation network alternative to commuters.
            </ParagraphText>
            <ParagraphText>
              Won first place in Westminster "Hack Our City" hackathon. (Reach
              out to learn more!)
            </ParagraphText>
            <UnorderedList>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList>
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <ProjectImg src={require('images/flexride/flexride-cover.png')} />
          </ContentCol>
        </IntroContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={5} md={5} sm={11} xs={12}>
            <ProjectHeader>SFU Beedie Social Hub</ProjectHeader>
            <ParagraphText>
              The SFU Beedie Social Media Hub is a centralized page of all
              faculty and student related news and social media. It was a place
              for all SFU Beedie faculty and students to stay updated and
              connected. (Reach out to learn more!)
            </ParagraphText>
            <UnorderedList>
              <li>Project Management</li>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList>
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <ProjectImg src={require('images/beedie/beedie-cover.png')} />
          </ContentCol>
        </IntroContainer>
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
  margin-top: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '24pt' : '42pt')};
`;

const ContentCol = Col.extend`
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
`;

const ProjectHeader = SectionHeader.extend`
  font-size: ${props => (props.theme.isMobile ? '24pt' : '36pt')};
`;

const ProjectImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '0' : '0')};
  max-width: ${props => (props.theme.isMobile ? '100%' : '520px')};
`;

const styles = theme => ({
  btn: {
    marginLeft: '12px'
  }
});

export default withStyles(styles, { withTheme: true })(
  withRouter(ProjectSection)
);
