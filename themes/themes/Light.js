import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { ElevationConfig, TypographyConfig } from "./General"

let theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      root: {
        backgroundColor: "#FFFFFFBF",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#5F48D5",
        color: "#FFF",
        fontSize: 12,
      },
      arrow: {
        color: "#5F48D5",
      },
    },
    MuiPaper: {
      root: {
        border: "1px solid #39424E33",
      },
      outlined: {
        border: "1px solid #39424E33",
      },
      ...ElevationConfig,
    },
    MuiButton: {
      root: {
        borderRadius: "5px",
        transition: "all ease .3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    common: {
      black: "#1B1D29",
      white: "#E5E5E5",
    },
    text: {
      primary: "#2D2F52",
      secondary: "#8B979D",
    },
    divider: "#8B979DA6",
    type: "light",
    primary: {
      light: "#866FFD",
      main: "#5F48D5",
      dark: "#4E3AAF",
    },
    secondary: {
      light: "#FF7272",
      main: "#F74342",
      dark: "#DF2928",
    },
    background: {
      default: "#FFF",
      paper: "#FFF",
    },
  },
  typography: {
    ...TypographyConfig,
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "p",
        body2: "p",
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
})

theme = responsiveFontSizes(theme)

export default theme
