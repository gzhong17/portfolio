import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Base, TitleHeader, ParagraphText, LabelText } from 'AmberComponent';
import { IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

class MusersProject extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MainContainer>
        <IntroContainer>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <TitleHeader>Hi there, I'm Gloria</TitleHeader>
            <ParagraphText>
              The problem Influencers were struggling to stand out as a creator,
              due to a variety of challenges like IG algorithm, oversaturation,
              new market, etc, lack of respect/professionalism Impacted
              conversion rates on brand side because lack of transparency of
              experience/professionalism from influencers affected collaboration
              contact and success rates Who you worked with Lead designer,
              collaborated with 10 other influencers consistently Marketing +
              development teams What tools you used UX workshopping/interview
              Sketch Invision Discovery phases (how did you go about solving the
              problem) Stemmed from a broader user discovery session in feb, in
              the next 2 months, there 4 main touchpoints I designed the
              interview question set and workshop activities that were done
              remotely First discovered they were deeply impacted by IG
              algorithm and oversaturation of influencers, led to them low on
              time and resources to stand out Found that media kits are the
              staple tool to help influencers stand out and show their value,
              and we wanted to make it easy for them to do so, thus designing
              the Musers, online portfolio I spearheaded the last 2 interview
              sessions with codesigners, and also initiated a workshop with 4
              other local influencers Clarified they deeply valued exposure and
              customization as key features to have, in addition to showcasing
              their collab experience Also created sketches, hi-fi mockups,
              style guidelines, and partial front-end development The process
              you used to overcome the problem: lo-hi wireframes, prototypes,
              sketches, personas, user journeys, and research ===sketches,
              photos of workshop, initial mockups, mind mapping=== The final
              outcome (both of your work, and what happened after it was handed
              over, e.g. to a UI designer or developer!) ===mockups=== What I
              would do differently with more resources, wish I could frequently
              engage with the influencers to get their buy in more Would have
              done more local workshopping earlier instead of at the end, would
              have prioritized certain features more had we discovered certain
              things earlier
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <LogoImg src={require('images/logo.svg')} />
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

const styles = theme => ({});

export default withStyles(styles, { withTheme: true })(MusersProject);
