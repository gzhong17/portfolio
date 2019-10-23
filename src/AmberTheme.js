'use strict';

const fonts = (exports.fonts = {
  primaryFont: "'Roboto', sans-serif",
  secondaryFont: "'Roboto Slab', sans-serif",
  regular: 300,
  semiBold: 600,
  bold: 700
});

const colors = (exports.colors = {
  blackColor: '#212121',
  darkGreyColor: '#616161',
  lightGreyColor: '#9e9e9e',
  whiteColor: '#ffffff',
  peachColor: '#F4777C',
  darkPeachColor: '#EE3038',
  lightPeachColor: '#FABEC0',
  pinkColor: '#ee30d0',
  darkPinkColor: '#C210A6',
  yellowColor: '#FDD089',
  lightYellowColor: '#FEEED4',
  darkYellowColor: '#FCB23E',
  greenColor: '#6DCB63'
});

const theme = (exports.theme = {
  primaryTextColor: colors.blackColor,
  secondaryTextColor: colors.darkGreyColor,
  primaryContainerColor: colors.whiteColor,
  linkColor: colors.pinkColor,
  visitedLinkColor: colors.darkPinkColor,
  warningColor: colors.orangeColor,
  whiteTextColor: colors.whiteColor,
  blackBGColor: colors.blackColor,
  disabledTextColor: colors.darkGreyColor,
  disabledBGColor: colors.lightGreyColor,
  primaryTopBarColor: colors.lightBlackColor,
  successColor: colors.greenColor,
  errorColor: colors.darkPeachColor,
  infoColor: colors.pinkColor,
  defaultColor: colors.darkGreyColor,
  primaryColor: colors.peachColor,
  primary: {
    light: colors.lightPeachColor,
    main: colors.peachColor,
    dark: colors.darkPeachColor
  },
  secondary: {
    light: colors.lightYellowColor,
    main: colors.yellowColor,
    dark: colors.darkYellowColor
  },
  error: {
    light: colors.darkPeachColor,
    main: colors.darkPeachColor,
    dark: colors.darkPeachColor
  },
  fonts
});

//default theme for material-ui/core
exports.muiPalette = {
  typography: {
    color: theme.textColor,
    fontFamily: fonts.primaryFont,
    fontWeight: '300',
    useNextVariants: true
  },
  MuiInput: {
    root: {
      color: theme.textColor,
      fontFamily: fonts.primaryFont,
      fontWeight: '300',
      underline: {
        '&:after': {
          backgroundColor: theme.secondary.main
        }
      }
    }
  },
  MuiButton: {
    outlinedPrimary: {
      color: theme.primary.main,
      fontWeight: '600',
      fontSize: '10pt'
    },
    root: {
      fontFamily: fonts.primaryFont,
      fontWeight: '600',
      fontSize: '10pt'
    }
  },
  MuiRadio: {
    colorSecondary: {
      '&$checked': {
        color: theme.primary.main
      }
    }
  },
  MuiTable: {
    root: {
      color: theme.primaryTextColor,
      fontFamily: fonts.primaryFont,
      fontSize: '12pt',
      fontWeight: '300'
    }
  },
  MuiTableCell: {
    body: {
      color: theme.primaryTextColor,
      fontSize: '12pt',
      fontWeight: '300'
    },
    head: {
      color: theme.primaryTextColor,
      fontSize: '12pt',
      fontWeight: '700'
    }
  },
  MuiFormLabel: {
    root: {
      fontFamily: fonts.primaryFont,
      fontWeight: '700',
      '&$focused': {
        // increase the specificity for the pseudo class
        color: theme.primary.main
      }
    }
  },
  MuiCheckbox: {
    root: {
      '&$checked': {
        color: theme.primary.main
      }
    },
    colorSecondary: {
      '&$checked': {
        color: theme.primary.main
      }
    }
  },
  MuiTypography: {
    body1: {
      color: theme.primaryTextColor,
      fontFamily: fonts.primaryFont,
      fontSize: '12pt',
      fontWeight: '300'
    }
  },
  MuiSelectInput: {
    root: {
      '&:before': {
        borderBottom: 'none !important'
      },
      '&:after': {
        borderBottom: 'none !important'
      }
    }
  }
};
