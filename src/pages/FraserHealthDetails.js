import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  ImgLabelText,
  ProjectHeader,
  ParagraphText,
  SectionHeader,
  LabelText,
  OrderedList,
  UnorderedList
} from 'AmberComponent';
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
              This was a redesign I led at Fraser Health, to update their
              internal SharePoint Workspaces.
            </ParagraphText>
            <ParagraphText>
              This project allowed 26K+ Fraser Health employees in the lower
              mainland to access request forms, training and support, and
              upcoming news.
            </ParagraphText>
          </ContentCol>
          <ContentCol lgOffset={1} lg={7} md={8} sm={12} xs={12}>
            <ProjectHeroImg
              src={require('images/fraserhealth/fh-home-small.png')}
            />
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProcessLabelText>Design Process</ProcessLabelText>
            <ProcessContainer>
              <ProcessCol lg={1} md={1} sm={1} xs={1}>
                <ProcessImg src={require('images/musers/process-path.png')} />
              </ProcessCol>
              <ProcessCol lg={11} md={11} sm={11} xs={11}>
                <OrderedList>
                  <li>Defining the Problem</li>
                  <li>Initial Research</li>
                  <li>Ideation & Prototyping</li>
                  <li>User Feedback</li>
                  <li>Launch to 26K+ users</li>
                </OrderedList>
              </ProcessCol>
            </ProcessContainer>
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ParagraphText>
              <LabelText>Role</LabelText>
              Sole project as UX/UI Designer
            </ParagraphText>
            <UnorderedList>
              <li>Project Management</li>
              <li>UX Research</li>
              <li>UX/UI Design</li>
            </UnorderedList>
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Tools Used</LabelText>
            <UnorderedList>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Microsoft SharePoint</li>
              <li>HTML5 & CSS3</li>
            </UnorderedList>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <SectionHeader>Summary</SectionHeader>
            <ParagraphText>
              It was a great experience working with a large complex system,
              untangling and creating a new order that better serves its users.
            </ParagraphText>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <LabelText>Scope</LabelText>
            <UnorderedList>
              <li>1-2 month project</li>
              <li>
                Purpose to solve usability issues and refresh the visual look
                across the Workspace
              </li>
              <li>
                Reduce time and mental capacity by streamlining everyday tasks
                for users (e.g. admins, nurses, etc)
              </li>
            </UnorderedList>
            <LabelText>Project Lead</LabelText>
            <UnorderedList>
              <li>
                Initiated design sessions, heuristic evaluations, and presented
                analysis and solutions to internal stakeholders
              </li>
              <li>
                Created sketches & hi-fi mockups of the home and support section
                of the Workspace for user feedback
              </li>
              <li>
                Created graphic assets, icons, copywriting, and wrote customized
                code within the SharePoint Workspace
              </li>
            </UnorderedList>
            <LabelText>Impact</LabelText>
            <UnorderedList>
              <li>
                Managed launch of redesign to over 26K Fraser Health employees
                across the lower mainland
              </li>
            </UnorderedList>
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
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  As Fraser Health have been moving towards better integration
                  between existing processes and new technology, a clear need to
                  update the Fraser Health (FH) Sharepoint Workspace was
                  identified.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  My approach is to validate these concerns and meet with
                  internal stakeholders to define the scope of the project. It
                  turns out, it was an organizational and design problem that
                  made it difficult for FH employees to find information.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <NuggetContainer>
                  <StarsIcon color="secondary" />
                  <NuggetLabel>Nugget of Wisdom #1</NuggetLabel>
                </NuggetContainer>
                <ParagraphText>
                  While trying to decipher this large, nested system, I found it
                  crucial to step back from the nitty gritty details. By asking
                  yourself “what purpose does this piece address”, you can
                  identify which pieces are crucial or not, as well as its
                  relationship with each other.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 2</LabelText>
            <SectionHeader>The Approach</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Since the scope of the project was clearly laid out already,
                  my priorties was to identify any bottlenecks and design issues
                  to optimize the speed and accuracy users can navigate around
                  the Workspace.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  This was done through evaluating the basic usability, and
                  reviewing internal metrics and conducted design sessions to
                  map out the new information architecture for clear, efficient
                  user experience.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/fraserhealth/fh-layout.png')}
                />
                <ImgLabelText>
                  Prioritizing most relevant information in high traffic areas
                  of the platform
                </ImgLabelText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/fraserhealth/fh-icons-drafts.png')}
                />
                <ImgLabelText>
                  Balancing creativity with current branding for a cohesive
                  brand experience
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
                  Always keep in mind who one’s designing for, as each
                  company/organization have their own branding and expectations.
                  As much as I liked having free reign on the new design, it was
                  crucial to balance with any existing branding guidelines for a
                  consistent and unified experience.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 3</LabelText>
            <SectionHeader>The Challenge</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Since there was an existing, intertwining structure in place,
                  I had to make a call on changing the way the Workspace was
                  structured. I aimed to divide and organize information by
                  relevance but this was a significant change from before, where
                  everything was lumped together on the same page.
                </ParagraphText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ParagraphText>
                  Backed by user data and testing, I communicated and justified
                  a big systematic change to other stakeholders and planned how
                  new and existing users can easily adopt and convert in this
                  new design.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
            <ColContainer>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/fraserhealth/support-original2-edit.png')}
                />
                <ImgLabelText>
                  Identifying pros and cons of old system, use to understand
                  user behaviour and opportunities
                </ImgLabelText>
              </InnerCol>
              <InnerCol lg={6} md={6} sm={12} xs={12}>
                <ProjectImg
                  src={require('images/fraserhealth/support-home-edit.png')}
                />
                <ImgLabelText>
                  Dividing up information to reduce redundancy and mental
                  fatigue
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
                  User adoption is something that we may forget when we, as
                  designers, get too caught up in the new design. How should we
                  introduce any new changes to existing users to make this
                  transition easier? Aside from newsletters or onboarding tools,
                  if the design is intuitive, then that is half the battle won.
                  By involving real users to participate in the design via mind
                  mapping, etc, we can get closer to designing for actual user
                  behaviour and needs.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <LabelText>Chapter 4</LabelText>
            <SectionHeader>The Result</SectionHeader>
          </ContentCol>
          <ContentCol lg={8} md={8} sm={12} xs={12}>
            <ColContainer>
              <InnerCol lg={12} md={12} sm={12} xs={12}>
                <ParagraphText>
                  The new design was launched to 26K+ Fraser Health
                  cross-department employees all over the Vancouver lower
                  mainland. The updated aesthetics and structure was a breath of
                  fresh air and tailored to the evolving needs of a growing
                  organization. Users that once took 5 minutes or longer to
                  locate a form or support article now takes half the speed.
                  Even as departments and teams grow, the Workspace allows users
                  of different needs and levels of access to quickly find
                  relevant information.
                </ParagraphText>
              </InnerCol>
            </ColContainer>
          </ContentCol>
        </SectionContainer>
        <SectionContainer>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg src={require('images/fraserhealth/fh-home.png')} />
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg src={require('images/fraserhealth/support-home.png')} />
          </ContentCol>
          <ContentCol lg={4} md={4} sm={12} xs={12}>
            <ProjectImg
              src={require('images/fraserhealth/support-admin.png')}
            />
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
