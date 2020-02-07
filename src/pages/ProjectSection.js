import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Base, ParagraphText, SectionHeader } from 'AmberComponent';
import { IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectSection extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={6} md={6} sm={12} xs={12}>
            <ProjectImg src={require('images/musers/musers-sample.png')} />
          </ContentCol>
          <ContentCol lg={4} md={5} sm={11} xs={12}>
            <ProjectHeader>Musers by MuseFind</ProjectHeader>
            {/* <LabelText>Influencer Online Portfolio</LabelText> */}
            <ParagraphText>
              Musers is an online influencer portfolio platform, where
              influencers can fully showcase their professionalism and value.
            </ParagraphText>
            <ParagraphText>
              <ul>
                <li>Product Management</li>
                <li>UX Research</li>
                <li>UX/UI Design</li>
              </ul>
            </ParagraphText>
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
            <Button
              className={classes.btn}
              size="medium"
              onClick={() => {
                window.open('http://musers.co');
              }}
            >
              See It In Action
            </Button>
          </ContentCol>
        </IntroContainer>
        <IntroContainer>
          <ContentCol lgOffset={1} lg={6} md={6} sm={12} xs={12}>
            <ProjectImg
              src={require('images/fraserhealth/fh-home-small.png')}
            />
          </ContentCol>
          <ContentCol lg={4} md={5} sm={11} xs={12}>
            <ProjectHeader>Fraser Health Workspace</ProjectHeader>
            {/* <LabelText>Influencer Online Portfolio</LabelText> */}
            <ParagraphText>
              The Fraser Health SharePoint Workspaces allows 26K+ Fraser Health
              employees in the Vancouver lower mainland to access request forms,
              training and support, and upcoming news.
            </ParagraphText>
            <ParagraphText>
              <ul>
                <li>Project Management</li>
                <li>UX Research</li>
                <li>UX/UI Design</li>
              </ul>
            </ParagraphText>
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
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
`;

const ContentCol = Col.extend`
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
`;

const ProjectHeader = SectionHeader.extend`
  font-size: ${props => (props.theme.isMobile ? '24pt' : '36pt')};
`;

const ProjectImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '0' : '24pt')};
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
