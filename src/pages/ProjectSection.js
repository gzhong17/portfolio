import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  TitleHeader,
  ParagraphText,
  SecondaryHeader,
  LabelText
} from 'AmberComponent';
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
          <ContentCol lgOffset={1} lg={6} md={12} sm={12} xs={12}>
            <ProjectImg src={require('images/musers-sample.png')} />
          </ContentCol>
          <ContentCol lg={4} md={12} sm={12} xs={12}>
            <SectionHeader>Musers by MuseFind</SectionHeader>
            {/* <LabelText>Influencer Online Portfolio</LabelText> */}
            <ParagraphText>
              Musers is an online influencer portfolio platform, where
              influencers can fully showcase their professionalism and value. I
              led the <strong>user discovery, feedback, and design</strong> of
              this project.
            </ParagraphText>
            <ParagraphText>
              <a href="http://musers.co" alt="Link to Musers website">
                Link to Platform
              </a>
            </ParagraphText>
            {/* <LabelText>
              [My process is under construction, please visit soon!]
            </LabelText> */}

            <Button
              size="medium"
              variant="outlined"
              color="primary"
              onClick={() => {
                window.open('/portfolio/documents/musers-process.pdf');
              }}
            >
              See My Process
            </Button>
            {/* <Button
              size="medium"
              onClick={() => {
                history.push('/musers');
              }}
            >
              See My Process
            </Button> */}
          </ContentCol>
        </IntroContainer>
        {/* <UpcomingContainer>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <SecondaryHeader>
              Want to continue this conversation?
            </SecondaryHeader>
          </ContentCol>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <IconButton color="primary">
            <ArrowDownwardIcon style={{ fill: 'primary' }} />
            </IconButton>
            <FontAwesomeIcon icon="linkedin" />
            <Icon className="fa fa-plus-circle" color="primary" />
          </ContentCol>
        </UpcomingContainer> */}
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
  margin-top: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
`;
const UpcomingContainer = Base.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const SectionHeader = TitleHeader.extend`
  color: ${props => props.theme.primaryColor};
`;

const ContentCol = Col.extend``;

const ProjectImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '12pt' : '24pt')};
  width: ${props => (props.theme.isMobile ? '100%' : '600px')};
`;

const styles = theme => ({});

export default withStyles(styles, { withTheme: true })(
  withRouter(ProjectSection)
);
