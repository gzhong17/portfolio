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
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <TitleHeader>Musers by MuseFind</TitleHeader>
            {/* <LabelText>Influencer Online Portfolio</LabelText> */}
            <ParagraphText>
              Musers is an online influencer portfolio platform, where
              influencers can fully showcase their professionalism and value. I
              led the user discovery, feedback, and design of this project.
            </ParagraphText>
            <ParagraphText>
              <a href="http://musers.co" alt="Link to Musers website">
                Link to Platform
              </a>
            </ParagraphText>
            <LabelText>
              [My process is under construction, please visit soon!]
            </LabelText>

            {/* <Button
              size="medium"
              onClick={() => {
                history.push('/musers');
              }}
            >
              See My Process
            </Button> */}
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <ProjectImg src={require('images/musers-sample.png')} />
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
  margin: ${props => (props.theme.isMobile ? '16px' : '36px')};
`;
const IntroContainer = Row.extend`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
`;
const UpcomingContainer = Base.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
