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

class FraserHealthDetails extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectHeader>Fraser Health Workspace</ProjectHeader>
            <ParagraphText>
              Musers is an online influencer portfolio, where influencers can
              upload their background information, social/audience stats, past
              work experiences, and services. This platform aims to help them
              communicate immediate value and professionalism.
            </ParagraphText>
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
          <ContentCol lgOffset={1} lg={7} md={4} sm={12} xs={12}>
            <ProjectHeroImg src={require('images/musers/musers-sample.png')} />
          </ContentCol>

          {/* <LabelText>Influencer Online Portfolio</LabelText> */}
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
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <SectionHeader>Summary</SectionHeader>
            <ParagraphText>
              This project is very close to my heart, as I really enjoyed
              leading this project and overseeing it from start to end. There
              were so many curveballs at every step but it was exciting to
              decipher and translate it into a useful solution.
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <LabelText>Scope</LabelText>
            <ParagraphText>
              <ul>
                <li>6 month project</li>
                <li>
                  Purpose was to increase user engagement/customer health and
                  lead to an increase in user conversion on the MuseFind
                  platform
                </li>
                <li>
                  Aimed to release before the holiday season, which is the
                  busiest time of year for influencers
                </li>
              </ul>
            </ParagraphText>
            <LabelText>Project Lead and Manager</LabelText>
            <ParagraphText>
              <ul>
                <li>
                  Set up and conducted user research with a sample size of 60+
                  influencers
                </li>
                <li>
                  Communicated analysis on findings and proposed solutions to
                  key internal stakeholders
                </li>
                <li>
                  Co-ordinated with marketing and dev team to create product
                  roadmap and release/social media strategies
                </li>
                <li>
                  Collaborated/ managed feedback from 10 influencer
                  ‘co-designers’ with expert knowledge
                </li>
                <li>
                  Created sketches & hi-fi mockups for user feedback and dev
                  team (4 iterations)
                </li>
                <li>
                  Assisted dev team with building themes and components in
                  Javascript (React.js)
                </li>
              </ul>
            </ParagraphText>
            <LabelText>Impact</LabelText>
            <ParagraphText>
              <ul>
                <li>
                  Managed soft launch to 50 influencers with a combined
                  followership of 1.4M followers
                </li>
              </ul>
            </ParagraphText>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <SectionHeader>
              It’s more fun to hear about it over a London Fog or Bubble Tea,
              but since you’re here already, here’s the whole story!
            </SectionHeader>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 1</LabelText>
            <SectionHeader>The Problem</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <ProjectImg src={require('images/musers/codesigners.png')} />
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Influencers were struggling to land collaborations or
                  negotiate for compensation because they weren’t being treated
                  and valued as professional content creators by brands.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  These issues impacted our main product (MuseFind platform),
                  causing low user activity and conversion, and poor customer
                  health for both brands and influencers.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 2</LabelText>
            <SectionHeader>Initial Research</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  For the first workshop session with our 10 influencer
                  “co-designers”, I came up with a set of interview questions
                  and workshop materials to reveal the impact of the problems
                  and coping methods influencers developed, towards the
                  everchanging Instagram algorithm.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Meeting remotely proved to be a challenge, as I had to think
                  outside-the-box to run collaborative exercises. I improvised
                  and did many practice runs to make sure everything ran
                  smoothly. The results from this initial discovery is
                  summarized below:
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <LabelText>Discovery #1</LabelText>
                <ParagraphText>
                  <ol>
                    <li>
                      [Showing Value] Struggling to stand out due to IG
                      algorithm changes and market oversaturation
                    </li>
                    <li>
                      [Lack of Time] To compensate, influencers overwhelm
                      themselves by working harder in order to be seen
                    </li>
                  </ol>
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/musers/affinity-diagram.png')}
                />
                <ImgLabelText>
                  Using Trello board for affinity diagramming
                </ImgLabelText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/musers/presentation-slide.png')}
                />
                <ImgLabelText>Presenting discovery findings</ImgLabelText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <NuggetContainer>
                  <StarsIcon color="secondary" />
                  <NuggetLabel>Nugget of Wisdom #1</NuggetLabel>
                </NuggetContainer>
                <ParagraphText>
                  I would’ve avoided some of these issues by meeting locally,
                  but I had considered how we would have a higher response rate
                  with these remote influencers because of our established
                  rapport from the initial customer discovery. The trade-off was
                  worth the extra effort and the quality of the responses was
                  maintained.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 3</LabelText>
            <SectionHeader>Research Analysis</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  I found that media kits were one of the main tools influencers
                  used to show their value and stand out. Media kits were also
                  inconsistent between different influencers, which made it hard
                  to communicate immediate value and was time consuming to
                  maintain/update.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  I did competitive analysis with our immediate competitors and
                  8 other platforms outside of my industry such as Fiverr,
                  Upwork, POF, etc to find patterns of how users communicate
                  their value, experience and services.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg src={require('images/musers/media-kits.png')} />
                <ImgLabelText>
                  Looking for patterns and styles in media kits
                </ImgLabelText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/musers/profile-analysis.png')}
                />
                <ImgLabelText>
                  Analyzing media kits and marketplaces
                </ImgLabelText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <NuggetContainer>
                  <StarsIcon color="secondary" />
                  <NuggetLabel>Nugget of Wisdom #2</NuggetLabel>
                </NuggetContainer>
                <ParagraphText>
                  I found it incredibly insightful to learn from other
                  industries, because I can draw many parallels from their
                  challenges and the underlying principles. By observing what
                  others have already solved or learning from their mistakes,
                  helps me avoid pitfalls when resolving my own challenges.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  The #1 thing those platforms focused on was building trust
                  that you’re reliable and deliver quality work. Currently,
                  brands tend to judge influencers based on their follower
                  count, because there isn’t another way for them to see an
                  influencer’s track record and the impact of their past
                  collaborations.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  I wanted to design a platform where influencers can show that
                  they’re more than just a number (# of followers). I found it
                  is critical to give influencers the space and freedom to show
                  more of their process and work, unlike Instagram or PDFs that
                  could be limiting. I want to help them communicate their
                  unique value and get the respect and opportunities they
                  deserve.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 4</LabelText>
            <SectionHeader>Design Process</SectionHeader>
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
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  During this time, I led the design, sketching and creating
                  mockups in Sketch and InVision, while setting up meetings with
                  influencers and spearheading the user feedback sessions. I
                  went through 4 interations of designs until we were ready to
                  launch.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  In collaboration with marketing and dev teams, I planned
                  release dates and prioritized features for each upcoming
                  release in the product roadmap. I also took on some front-end
                  development, assisting in building themes, styled components,
                  and the landing page in Javascript (React.js).
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg src={require('images/musers/sketches.png')} />
                <ImgLabelText>
                  Form follows function, designing to solve user issues
                </ImgLabelText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/musers/profile-iterations.png')}
                />
                <ImgLabelText>
                  Constant iteration of the layout and content
                </ImgLabelText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <NuggetContainer>
                  <StarsIcon color="secondary" />
                  <NuggetLabel>Nugget of Wisdom #3</NuggetLabel>
                </NuggetContainer>
                <ParagraphText>
                  While working on the product roadmap, I learned to compromise
                  and prioritize features and releases due to technical
                  constrants and resources. In addition to making decisions
                  after considering the constraints, I also communicated it to
                  other teams and adjusted our strategies.
                </ParagraphText>
                <ParagraphText>
                  Often, you want to build all the “important” features before
                  launching, but you need to consider how much time and resource
                  that takes and consider the deadlines, which are tied to the
                  business goals. Checking back with the business and user goals
                  helps put things into perspective and strip down to the core
                  features, makes you ask “What is going to bring just enough
                  value for this current scope?”
                </ParagraphText>
                <ParagraphText>
                  And, always overcommunicate; that was an important takeaway.
                  If I were to push back the release date, that needs to be
                  communicated with Marketing and other teams. They need to know
                  as soon as possible so that they can start planning their
                  strategy or update any messaging across the different
                  communication channels. We communicated early in the process
                  and checked in every week to stay on track. It was important
                  to communicate and consider the timing of when Marketing sends
                  out an email blast or what information to release when they
                  schedule Instagram posts to promote Musers.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 5</LabelText>
            <SectionHeader>User Feedback</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  As we’re approaching the final iteration before launch, I
                  prepared and conducted another round of interviews and
                  activities with 4 local influencers. I wanted to test for
                  usability for the features we already built, as well as
                  gathering requirements for features we’re aiming to build.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Triangulating this information with more interviews with my
                  co-designers, I noticed a clear pattern of needs regarding
                  media kits/influencer portfolios. Here is a summary of my
                  findings:
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <LabelText>Discovery #2</LabelText>
                <ParagraphText>
                  <ol>
                    <li>
                      [Exposure] Exposure provided value, not only to brands,
                      but also PR companies/ talent agencies
                    </li>
                    <li>
                      [Customization] Media kit are the face of the influencer,
                      highly customizable to match own brand
                    </li>
                  </ol>
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg src={require('images/musers/workshop.png')} />
                <ImgLabelText>
                  Documenting feedback from local and remote participants
                </ImgLabelText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg src={require('images/musers/revisions.png')} />
                <ImgLabelText>
                  Revising the process based on real user behaviour
                </ImgLabelText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Using the feedback from my interviews and feedback sessions, I
                  revised and simplified certain parts of the portfolio, such as
                  a more generalized but guided space to upload their past
                  collaborations. I had previously set up very specific
                  questions they had to answer, so that the brand can see
                  exactly what they did or what results their work had made.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Understanding freedom and customization was important, that
                  every influencer had their own approach, I revised the design
                  to provide a more generalized description textbox with
                  optional question prompts. They can choose to compose their
                  work in whichever way that makes sense to them while being
                  guided to write about their value and impact.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <NuggetContainer>
                  <StarsIcon color="secondary" />
                  <NuggetLabel>Nugget of Wisdom #4</NuggetLabel>
                </NuggetContainer>
                <ParagraphText>
                  Understanding the user’s process and design around how they
                  truly behave was so crucial. I learned to avoid funneling
                  users into a restricted process and force them to behave as
                  you want. This will cause unnecessary friction and the feature
                  could end up being useless for the user.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 6</LabelText>
            <SectionHeader>Final Results</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  There were secondary priories like greater theme customization
                  and connecting their profiles to a network of agencies. These
                  were important because as part of standing out, influencers
                  want more eyeballs on their portfolio and make sure the
                  portfolio accurately represents who they are.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  This product is still very new and we haven’t had the
                  resources or manpower to really realize the product to its
                  fullest at the time of the launch. I managed the soft launched
                  in late September and there has been 50+ influencer signups
                  with a combined followership of 1.4M followers.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <NuggetContainer>
                  <StarsIcon color="secondary" />
                  <NuggetLabel>Final Nugget of Wisdom #5</NuggetLabel>
                </NuggetContainer>
                <ParagraphText>
                  Looking back, things I would’ve done differently would be to
                  more frequently engage with our ‘co-designer’ influencers,
                  such as more frequently checking in via email or Slack. I
                  learned that it was important to fact-check with influencers,
                  constantly probing and questioning what they’re saying versus
                  what they’re really looking for. Sometimes users don't always
                  say what they mean, or even have trouble articulating it.
                  Doing that more frequently definitely would help reveal their
                  true pains and stay on track building what they needed. It
                  would’ve also encouraged user buy-in and ownership to have
                  them more engaged with our project.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg src={require('images/musers/profile.png')} />
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg src={require('images/musers/portfolio.png')} />
            <ProjectImg src={require('images/musers/portfolio-details.png')} />
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg src={require('images/musers/onboarding.png')} />
            <ProjectImg src={require('images/musers/website.png')} />
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
  withRouter(FraserHealthDetails)
);
