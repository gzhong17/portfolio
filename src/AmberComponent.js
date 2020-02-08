import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';

/**** Base ****/

const Base = (exports.Base = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : '12pt')};
  margin: ${props => (props.margin ? props.margin : '')};
  margin-left: ${props =>
    props.marginLeft ? `${props.marginLeft} !important` : ''};
  margin-top: ${props =>
    props.marginTop ? `${props.marginTop} !important` : ''};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom} !important` : ''};
  margin-right: ${props =>
    props.marginRight ? `${props.marginRight} !important` : ''};
  padding: ${props => props.padding || ''};
  height: ${props => props.height};
  width: ${props => props.width};
`);

const BaseText = (exports.BaseText = Base.withComponent('p').extend`
  text-transform: ${props => {
    if (props.uppercase) {
      return 'uppercase';
    }
    if (props.capitalize) {
      return 'capitalize';
    }
    return 'none';
  }};
  font-weight: ${props => (props.bold ? 'bold' : 300)};
  text-decoration: ${props => (props.underline ? 'underline' : '')};
  font-style: ${props => (props.italic ? 'italic' : '')};
  color: ${props =>
    props.color ? `${props.color} !important` : props.theme.textColor};
  background-color: ${props => {
    return props.backgroundColor ? props.backgroundColor : '';
  }};
  font-family: ${props => props.theme.fonts.primaryFont};
  display: ${props => (props.display ? props.display : 'block')};
  line-height: 100%;
  margin-bottom: 4pt;
`);

/**** Text ****/

exports.TitleHeader = BaseText.withComponent('h1').extend`
  margin:0;
  margin-bottom: 16px;
  font-size: ${props => (props.theme.isMobile ? '24pt' : '36pt')};
  color: ${props => props.theme.primaryTextColor};
  font-family: ${props => props.theme.fonts.primaryFont};
  font-weight: ${props => props.theme.fonts.semiBold};
`;

exports.SectionHeader = BaseText.withComponent('h1').extend`
  margin:0;
  margin-bottom: 16px;
  font-size:  ${props => (props.theme.isMobile ? '20pt' : '24pt')};
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fonts.secondaryFont};
`;
exports.ProjectHeader = BaseText.withComponent('h1').extend`
  margin:0;
  margin-bottom: 16px;
  font-size: ${props => (props.theme.isMobile ? '24pt' : '36pt')};
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fonts.secondaryFont};
`;

exports.ParagraphText = BaseText.withComponent('p').extend`
  margin:0;
  margin-bottom: 16px;
  font-size: 12pt;
  line-height: 160%;
  color: ${props => props.theme.primaryTextColor};
  font-family: ${props => props.theme.fonts.primaryFont};
`;

exports.SecondaryHeader = BaseText.withComponent('p').extend`
  margin:0;
  margin-bottom: ${props => (props.theme.isMobile ? '16pt' : '24pt')};
  font-size: ${props => (props.theme.isMobile ? '16pt' : '20pt')};
  font-family: ${props => props.theme.fonts.primaryFont};
  text-transform: uppercase;
  color: ${props => props.theme.primaryTextColor};
`;
exports.LabelText = BaseText.withComponent('p').extend`
  margin:0;
  margin-bottom: ${props => (props.theme.isMobile ? '12pt' : '16pt')};
  font-size: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
  font-weight: ${props => props.theme.fonts.semiBold};
  font-family: ${props => props.theme.fonts.primaryFont};
  text-transform: uppercase;
  color: ${props => props.theme.primaryTextColor};
`;

exports.ImgLabelText = BaseText.withComponent('p').extend`
  margin:0;
  margin-bottom: ${props => (props.theme.isMobile ? '16pt' : '16pt')};
  font-size: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
  font-weight: ${props => props.theme.fonts.semiBold};
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props => props.theme.primaryTextColor};
`;

exports.HomeLinkText = BaseText.withComponent('a').extend`
  text-decoration: none;
`;

exports.LinkText = BaseText.withComponent('a').extend`
  font-size: ${props => (props.theme.isMobile ? '12pt' : '12pt')};
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props => props.theme.primaryColor};
  display: inline;
`;

exports.UnorderedList = BaseText.withComponent('ul').extend`
  font-size: 12pt;
  line-height: 160%;
  color: ${props => props.theme.primaryTextColor};
  font-family: ${props => props.theme.fonts.primaryFont};
`;

exports.OrderedList = BaseText.withComponent('ol').extend`
  font-size: 12pt;
  line-height: 160%;
  color: ${props => props.theme.primaryTextColor};
  font-family: ${props => props.theme.fonts.primaryFont};
`;
