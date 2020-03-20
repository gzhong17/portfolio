import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Base, ParagraphText, SectionHeader } from 'AmberComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconButton, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-styled-flexboxgrid';

class ContactProjectSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MainContainer id="contact">
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
                window.open('mailto:gzhong17@gmail.com');
              }}
            >
              Email Me
            </Button>
            <Button
              className={classes.btn}
              size="medium"
              color="primary"
              onClick={() => {
                window.open('/documents/gloria-zhong-resume.pdf');
              }}
            >
              My Resume
            </Button>
            <IconButton
              className={classes.btn}
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
  padding-left: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  padding-right: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '16pt')};
`;
const IntroContainer = Base.extend`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '42pt')};
  justify-content: left;
`;

const ContentCol = Col.extend``;

const styles = theme => ({
  btn: {
    marginLeft: '12px'
  }
});

export default withStyles(styles, { withTheme: true })(
  withRouter(ContactProjectSection)
);
