import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Base,
  TitleHeader,
  ParagraphText,
  SectionHeader
} from 'AmberComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

class ContactSection extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <MainContainer>
        <IntroContainer>
          <ContentCol lg={6} md={6} sm={12} xs={12}>
            <SectionHeader>I'm Happy To Chat!</SectionHeader>
            {/* <LabelText>Influencer Online Portfolio</LabelText> */}
            <ParagraphText>
              If you would like to see how I can make an impact with you or
              wanting to hear more from me, I'd love to meet and continue this
              conversation!
            </ParagraphText>
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              onClick={() => {
                window.open('mailto:gzhong17@hotmail.com');
              }}
            >
              Email Me
            </Button>
            <Button
              className={classes.btn}
              size="medium"
              onClick={() => {
                window.open('/portfolio/documents/gzhong-resume-102919.pdf');
              }}
            >
              My Resume
            </Button>
            <IconButton
              onClick={() => {
                window.open('https://www.linkedin.com/in/gloriazhong17/');
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
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
  margin: ${props => (props.theme.isMobile ? '16px' : '36px')};
`;
const IntroContainer = Base.extend`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  justify-content: center;
`;

const ContentCol = Col.extend``;

const styles = theme => ({
  btn: {
    marginLeft: '12px'
  }
});

export default withStyles(styles, { withTheme: true })(
  withRouter(ContactSection)
);
