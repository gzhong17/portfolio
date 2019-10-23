import React, { Component } from 'react';
import Header from 'Header';
import { TitleHeader, ParagraphText } from 'AmberComponent';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header pageName="home page" />
        <TitleHeader>Gloria Zhong: Product Designer</TitleHeader>
        <ParagraphText>
          I’m a product designer, passionate about translating user data into
          valuable solutions, through the lens of empathy and critical thinking.
        </ParagraphText>
      </div>
    );
  }
}

export default HomePage;
