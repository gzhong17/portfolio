import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  TitleHeader,
  ProjectHeader,
  ParagraphText,
  SectionHeader,
  LabelText
} from 'AmberComponent';
import { IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MusersDetails extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectHeader>Musers by MuseFind</ProjectHeader>
            <LabelText>About The Project</LabelText>
            <ParagraphText>
              Musers is an online influencer portfolio, where influencers can
              upload their background information, social/audience stats, past
              work experiences, and services. This platform aims to help them
              communicate immediate value and professionalism.
            </ParagraphText>
            <ParagraphText>
              <a href="http://musers.co" alt="Link to Musers website">
                Link to Platform
              </a>
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg src={require('images/musers-sample.png')} />
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg src={require('images/musers-sample.png')} />
          </ContentCol>
          {/* <LabelText>Influencer Online Portfolio</LabelText> */}
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProcessContainer>
              <ProcessCol lg={1} md={1} sm={1} xs={1}></ProcessCol>
              <ProcessCol lg={11} md={11} sm={11} xs={11}>
                <LabelText>The Process</LabelText>
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
              Influencers were struggling to land collaborations or negotiate
              for compensation.
              <ul>
                <li>Product Management</li>
                <li>UX Research</li>
                <li>UX/UI Design</li>
              </ul>
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <LabelText>Research</LabelText>
            <ParagraphText>
              Influencers were struggling to land collaborations or negotiate
              for compensation.
              <ul>
                <li>Product Management</li>
                <li>UX Research</li>
                <li>UX/UI Design</li>
              </ul>
            </ParagraphText>
            <LabelText>Research</LabelText>
            <ParagraphText>
              Influencers were struggling to land collaborations or negotiate
              for compensation. They weren’t being treated and valued as
              professional content creators/marketers by brands. This affected
              user activity, user conversion, and customer health for both brand
              and influencers.
            </ParagraphText>
            <LabelText>Research</LabelText>
            <ParagraphText>
              Influencers were struggling to land collaborations or negotiate
              for compensation. They weren’t being treated and valued as
              professional content creators/marketers by brands. This affected
              user activity, user conversion, and customer health for both brand
              and influencers.
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}></ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Research</LabelText>
            <ParagraphText>
              Influencers were struggling to land collaborations or negotiate
              for compensation. They weren’t being treated and valued as
              professional content creators/marketers by brands. This affected
              user activity, user conversion, and customer health for both brand
              and influencers.
            </ParagraphText>
            <ParagraphText>
              We conducted a customer discovery we with 46 influeners in
              February, and selected 10 of them to work closely with for the
              Musers project, an influencer online portfolio.
            </ParagraphText>

            <ParagraphText>
              For our first workshop session with our 10 influencer
              “co-designers”, I came up with a set of interview questions and
              workshop materials that could tell me the extent of impact from
              the Instagram algorithm changes on influencers and what methods
              they are using to cope with it. These influencers were meeting
              with me remotely, so I had to plan with that constraint in mind
              through having practive runs and finding alternative methods to
              record responses.
            </ParagraphText>
            <LabelText>Discovery #1</LabelText>
            <ParagraphText>
              1) [Showing Value] Struggling to stand out due to IG algorithm
              changes and market oversaturation 2) [Lack of Time] To compensate,
              influencers overwhelm themselves by working harder in order to be
              seen
            </ParagraphText>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Next Steps</LabelText>
            <ParagraphText>
              I found that media kits were one of the main tools influencers
              used to show their value and stand out. They were also
              inconsistent between different influencers, which made it hard to
              communicate immediate value and was time consuming to
              maintain/update. I did competitive analysis with our immediate
              competitors and 8 other platforms outside of my industry such as
              Fiverr, Upwork, POF, etc to find patterns of how the users
              communicated their value, experience and services. I also analyzed
              20+ media kits and compared the layout, content, and design, in
              order to catch any patterns as I'm figuring out how to standardize
              them while retaining key elements.
            </ParagraphText>
            <LabelText>Discovery #1</LabelText>
            <ParagraphText>
              1) [Credibility] Struggling to stand out due to IG algorithm
              changes and market oversaturation 2) [Visual Appeal] To
              compensate, influencers overwhelm themselves by working harder in
              order to be seen
            </ParagraphText>
            <ParagraphText>
              I wanted to design a platform where influencers can show that
              they’re more than just a number (# of followers). I found it
              critical to give them the space and freedom to show more of their
              process and work, unlike Instagram or PDFs that could be limiting.
              I want to help them communicate their unique value and get the
              respect and opportunities they deserve.
            </ParagraphText>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>My Design Process</LabelText>
            <TitleHeader>
              Ideation —> Sketches —> Hi-fi mockups —> Feedback sessions —>
              Revisions —> Build
            </TitleHeader>
            <ParagraphText>
              During this time, I led the design, creating mockups in Sketch and
              InVision, while setting up meetings with influencers and working
              with them for feedback. I also took on some front-end development,
              building simple pages of the platform and landing page in React.
            </ParagraphText>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>More Research</LabelText>
            <ParagraphText>
              As we’re approaching the final iteration before launch, I prepared
              and conducted another round of interviews and activities with 4
              local influencers, as I wanted to test for usability for the
              features we already built, as well as gathering requirements for
              features we’re aiming to build. Triangulating this information
              with more interviews with my co-designers, I noticed a clear
              pattern of needs regarding media kits/influencer portfolios.
            </ParagraphText>
            <LabelText>Discovery #2</LabelText>
            <ParagraphText>
              1) [Exposure] Exposure provided the most value, not only to
              brands, but also PR companies/ talent agencies 2) [Customization]
              Media kits represents the influencer, needs to be highly
              customizable to match their brand
            </ParagraphText>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}></ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Final Outcome</LabelText>
            <ParagraphText>
              Using the feedback from my interviews and feedback sessions, I
              revised and simplified certain parts of the portfolio, such as a
              more generalized but guided space to upload their past
              collaborations. I had previously set up very specific questions
              they had to answer, so that the brand can see exactly what they
              did or what results their work had made. Understanding freedom and
              customization was important, that every influencer had their own
              approach, I revise the design to provide a more generalized
              description textbox with optional question prompts, they can
              choose to compose their work in whichever way that makes sense to
              them while being guided to write about their value and impact.
              There were other important features like greater theme
              customization and connecting their profiles to a network of PR and
              talent agencies, but I was not able to implement theses changes
              immediately due to constraints in resources. However, it is a top
              priority in our roadmap and we are incrementally working towards
              realizing these important features.
            </ParagraphText>
            <LabelText>Learnings</LabelText>
            <ParagraphText>
              Looking back, things I would’ve done differently would be to do
              the local workshopping earlier in the process, instead of in the
              later half of the project. There was consideration however, that
              we would have a higher response rate with the remote influencers
              because of our established rapport from the initial customer
              discovery. Despite this, I think it would’ve made earlier impact
              when prioritizing features and honing in on providing value. Also
              more frequently engaging with our ‘co-designer’ influencers, such
              as using a slack channel or more frequent check-ins would have
              helped user buy-in and been more efficient and give better clarity
              with the direction of the product.
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
  margin-top: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
`;

const ContentCol = Col.extend``;

const ProcessContainer = Row.extend`
  display: flex;
`;

const ProcessCol = Col.extend``;

const ProjectImg = styled.img`
  margin-left: ${props => (props.theme.isMobile ? '12pt' : '0')};
  width: ${props => (props.theme.isMobile ? '100%' : '100%')};
`;

const styles = theme => ({});

export default withStyles(styles, { withTheme: true })(
  withRouter(MusersDetails)
);
