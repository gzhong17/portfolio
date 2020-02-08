import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Base, SectionHeader } from 'AmberComponent';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

class MoreProjectSection extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer>
        <IntroContainer>
          <ContentCol lg={12} md={12} sm={12} xs={12}>
            <ProjectLinkContainer>
              <ArrowImg src={require('images/arrow.svg')} />
              <NavLink to="/#projects" style={{ textDecoration: 'none' }}>
                <ProjectLinkHeader>See Past Projects</ProjectLinkHeader>
              </NavLink>
            </ProjectLinkContainer>
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
  padding-left: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  padding-right: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  margin-top: ${props => (props.theme.isMobile ? '12pt' : '36pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '24pt' : '84pt')};
`;
const IntroContainer = Base.extend`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProjectLinkContainer = Row.extend`
  display: flex;
  align-items: center;
`;

const ProjectLinkHeader = SectionHeader.extend`
  margin-left: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '0' : '0')};
`;

const ArrowImg = styled.img`
  width: ${props => (props.theme.isMobile ? '50px' : '50px')};
  transform: rotate(-90deg);
`;

const ContentCol = Col.extend``;

const styles = theme => ({
  btn: {
    marginLeft: '12px'
  },
  hashlink: {
    color: '${theme.primaryColor}'
  }
});

export default withStyles(styles, { withTheme: true })(
  withRouter(MoreProjectSection)
);
