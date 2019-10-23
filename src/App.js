import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import {
  MuiThemeProvider as NewThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { theme, muiPalette } from 'AmberTheme';
import { ThemeProvider } from 'styled-components';
import './App.css';

const newMuiTheme = createMuiTheme({
  palette: theme,
  typography: muiPalette.typography,
  overrides: {
    MuiInput: muiPalette.MuiInput,
    MuiButton: muiPalette.MuiButton,
    MuiRadio: muiPalette.MuiRadio,
    MuiTable: muiPalette.MuiTable,
    MuiTableCell: muiPalette.MuiTableCell,
    MuiFormLabel: muiPalette.MuiFormLabel,
    MuiCheckbox: muiPalette.MuiCheckbox,
    MuiTypography: muiPalette.MuiTypography,
    MuiSelect: muiPalette.MuiSelect,
    MuiSlider: muiPalette.MuiSlider
  }
});
class App extends Component {
  detectMobile() {
    if (
      window.navigator.userAgent.match(/Android/i) ||
      window.navigator.userAgent.match(/webOS/i) ||
      window.navigator.userAgent.match(/iPhone/i) ||
      window.navigator.userAgent.match(/iPod/i) ||
      window.navigator.userAgent.match(/BlackBerry/i) ||
      window.navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { children } = this.props;
    const museTheme = theme;
    museTheme.isMobile = this.detectMobile();
    newMuiTheme.isMobile = museTheme.isMobile;
    return (
      <Provider>
        <NewThemeProvider theme={newMuiTheme}>
          <ThemeProvider theme={museTheme}>{children}</ThemeProvider>
        </NewThemeProvider>
      </Provider>
    );
  }
}

export default App;
