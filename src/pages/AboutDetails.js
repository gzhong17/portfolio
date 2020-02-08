import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  ProjectHeader,
  ParagraphText,
  SectionHeader,
  LabelText,
  LinkText
} from 'AmberComponent';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

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
              When I’m not designing, I’m either watching Forensic Files or {''}
              <LinkText
                href="http://instagram.com/growsomeshade"
                target="_blank"
              >
                tending to my houseplants
              </LinkText>
              . I’m also passionate about mental health and personal
              development, so you’ll hear me chatting away about team building
              and culture!
            </ParagraphText>
          </ContentCol>
          <ContentCol lgOffset={1} lg={3} mdOffset={1} md={2} sm={12} xs={12}>
            <PortraitImg src={require('images/about-self.jpg')} />
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <SectionHeader>Design Principles I Live By</SectionHeader>

            <PrinciplesContainer>
              <ContentCol lg={4} md={4} sm={12} xs={12}>
                <ParagraphText>
                  <LabelText>Empathy is Key</LabelText>
                </ParagraphText>
                <ParagraphText>
                  The usefulness of a design really depends on the user and
                  stakeholder needs, not a prescription of what you assume is
                  best for them. Treat design as an ego-free zone.
                </ParagraphText>
              </ContentCol>
              <ContentCol lg={4} md={4} sm={12} xs={12}>
                <ParagraphText>
                  <LabelText>Always Know Your User</LabelText>
                </ParagraphText>
                <ParagraphText>
                  Live and breathe in data to understand who you’re designing
                  for. Influence others on your team to do the same, because
                  we’re all responsible for our user. Let the data speak on
                  behalf of the user.
                </ParagraphText>
              </ContentCol>
              <ContentCol lg={4} md={4} sm={12} xs={12}>
                <LabelText>North Star Vision</LabelText>
                <ParagraphText>
                  What differentiates a good designer from a great one is the
                  ability to step back and ask “How does this design impact our
                  greater vision?” Let your design decisions bring you closer to
                  the main goal.
                </ParagraphText>
              </ContentCol>
            </PrinciplesContainer>
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
  margin-top: ${props => (props.theme.isMobile ? '24pt' : '24pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '0' : '24pt')};

  flex-direction: row;
`;

const PrinciplesContainer = Row.extend`
  display: flex;
`;
const ContentCol = Col.extend``;

const PortraitImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '0' : '0')};
  width: ${props => (props.theme.isMobile ? '100%' : '350px')};
`;

const styles = {};

export default withStyles(styles, { withTheme: true })(
  withRouter(AboutDetails)
);
